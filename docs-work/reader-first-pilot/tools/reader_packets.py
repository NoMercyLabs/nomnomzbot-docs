# Copyright (c) NoMercy Labs. SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
"""Prepare blinded rendered-page copies. The private key is evaluator-only."""
import html
import argparse
from html.parser import HTMLParser
import json
from pathlib import Path
import random
import re
import sys

from pilot_site import PILOT, ROUTES

SKILL = PILOT.parents[2] / "nomnomzbot/.claude/scratch/reader-first-docs"
sys.path.insert(0, str(SKILL / "scripts"))
import check_page as gate


class Node:
    def __init__(self, tag="", attrs=(), parent=None):
        self.tag, self.attrs, self.parent, self.children = tag, dict(attrs), parent, []

    def text(self):
        return "".join(child.text() if isinstance(child, Node) else child for child in self.children)

    def nodes(self):
        yield self
        for child in self.children:
            if isinstance(child, Node):
                yield from child.nodes()


class Tree(HTMLParser):
    def __init__(self, source):
        super().__init__(convert_charrefs=True)
        self.root = self.current = Node()
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        node = Node(tag, attrs, self.current)
        self.current.children.append(node)
        if tag not in gate.Article.VOID:
            self.current = node

    def handle_startendtag(self, tag, attrs):
        self.current.children.append(Node(tag, attrs, self.current))

    def handle_endtag(self, tag):
        node = self.current
        while node.parent:
            if node.tag == tag:
                self.current = node.parent
                return
            node = node.parent

    def handle_data(self, data):
        self.current.children.append(data)


TAGS = {"article", "h1", "h2", "h3", "h4", "p", "table", "thead", "tbody", "tr", "td", "th", "ol", "ul", "li", "pre", "code", "blockquote", "details", "summary", "a", "strong", "em", "br", "hr"}


def display(node):
    if isinstance(node, str):
        return html.escape(node)
    if node.tag in {"script", "style", "svg", "nav", "header", "footer", "button", "template"} or "hidden" in node.attrs or node.attrs.get("aria-hidden") == "true":
        return ""
    inside = "".join(display(child) for child in node.children)
    if node.tag not in TAGS:
        return inside
    attrs = "".join(' ' + key + '="' + html.escape(value or "", quote=True) + '"' for key, value in node.attrs.items() if key in {"id", "href", "start", "colspan", "rowspan"})
    return "<" + node.tag + attrs + ">" + inside + ("" if node.tag in gate.Article.VOID else "</" + node.tag + ">")


def remove(node):
    node.parent.children.remove(node)


def readable(node):
    return re.sub(r'</(p|li|tr|h[1-4]|pre|table|details)>', r'</\1>\n', display(node))


def mutate(root, route):
    nodes = list(root.nodes())
    if route.endswith("create-a-command"):
        target = next(node for node in nodes if node.tag == "li" and node.text().strip().startswith("Choose Create command."))
        remove(target)
        return "omitted-action", "The initial creation procedure omits choosing Create command before testing the reply."
    if route.endswith("cooldowns-and-permissions"):
        target = next(node for node in nodes if node.tag == "li" and node.text().strip().startswith("At 5 seconds"))
        target.children = ["At 5 seconds, A tries again. The attempt is refused and both waits start again from that moment."]
        return "contradictory-outcome", "The example says a refused attempt restarts waits, contradicting the unchanged explanation that refusal starts neither."
    if route.endswith("timers-and-chat-triggers"):
        targets = [node for node in nodes if node.tag == "p" and (node.text().startswith("A new timer starts switched on") or "A timer that has never fired is already due" in node.text())]
        if len(targets) != 2:
            raise RuntimeError("Inspect both initial-firing explanations before moving the condition")
        article = next(node for node in nodes if node.tag == "article")
        for target in targets:
            remove(target)
            article.children.append(target)
            target.parent = article
        return "buried-condition", "Both explicit first-firing/next-poll explanations are moved after the entire reference and related links, away from creating/enabling a timer. The normal repeating poll frequency stays in its reference section."
    if route.endswith("built-in-commands"):
        target = next(node for node in nodes if node.tag == "h2" and "default" in node.text().lower())
        paragraph = Node("p", parent=target.parent)
        paragraph.children = ["To return just one changed cooldown to its default, choose Reset to default. This changes only that one field."]
        target.parent.children.insert(target.parent.children.index(target) + 1, paragraph)
        return "contradictory-outcome", "Inserted single-field instructions promise whole-command Reset to default changes only one field, contradicting the unchanged reset reference."
    if route.endswith("first-run-setup"):
        targets = [node for node in nodes if node.tag == "p" and re.search(r'two.factor', node.text(), re.I)]
        if len(targets) != 2:
            raise RuntimeError("Expected exactly two prerequisite paragraphs; inspect before mutating")
        for target in targets:
            if target.text().startswith("Your own Twitch app"):
                target.children = [re.sub(r' if you have a verified Twitch email address and two-factor authentication', '', child) if isinstance(child, str) else child for child in target.children]
            elif target.text().startswith("Twitch requires"):
                text = target.text()
                target.children = [text[text.index("You also need"):]]
            else:
                raise RuntimeError("Unexpected registration prerequisite location")
        return "missing-prerequisite", "The own-Twitch-app path omits verified-email and two-factor requirements needed to answer the prerequisites question."
    raise RuntimeError("No mutation for route")


def questions(contract):
    text = contract.read_text(encoding="utf-8-sig")
    result = []
    for number in range(1, 5):
        result.append(re.search(r'^' + str(number) + r'\. \*\*[^\n]+?:\*\* “(.+?)” \*\*Expected:', text, re.M)[1])
    return result + ["Where must you guess, reread or take a detour? Quote the obstacle and explain its cost. If there is no material obstacle, say so.", "What is unnecessary or confusing when read aloud? Quote it and explain its cost. A wording preference alone is not a material failure."]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--run", default="run-1")
    args = parser.parse_args()
    if not re.fullmatch(r"[A-Za-z0-9_-]+", args.run):
        raise RuntimeError("Run name must be a simple directory name")
    directory = PILOT / "calibration" / args.run
    directory.mkdir(parents=True, exist_ok=True)
    if (directory / "private-key.json").exists():
        raise RuntimeError("Do not overwrite a calibration run; preserve its answers and use a new run directory")
    key, groups = [], {"reader-a": [], "reader-b": []}
    numbers = list(range(101, 111))
    random.SystemRandom().shuffle(numbers)
    for index, route in enumerate(ROUTES):
        base_card = PILOT / "cards" / (Path(route).name + ".md")
        base_page = PILOT / "new" / (route + ".mdx")
        contract = PILOT / "contracts" / (Path(route).name + ".md")
        card = gate.read_card(base_card)
        if base_page.read_bytes() != (card["_Built-root"] / "_pilot-sources" / (route + ".mdx")).read_bytes():
            raise RuntimeError("Rendered source differs from the current pilot copy; rebuild before reviewing: " + route)
        raw = gate.article_html(card["_Rendered"])
        for damaged in (False, True):
            case = directory / str(numbers.pop())
            case.mkdir()
            source_card = base_card
            kind, defect = "intact", "No injected defect. Assess the actual page rather than presuming it is clean."
            tree = Tree(raw).root
            if damaged:
                kind, defect = mutate(tree, route)
                altered = case / "rendered.html"
                altered.write_text(readable(tree), encoding="utf-8")
                source_card = case / "card.md"
                content = re.sub(r'^Rendered: .+$', lambda _: "Rendered: " + str(altered), base_card.read_text(encoding="utf-8"), flags=re.M)
                source_card.write_text(content, encoding="utf-8")
            current_card = gate.read_card(source_card)
            fingerprint, fragment, _ = gate.snapshot(base_page, current_card)
            packet = {"fingerprint": fingerprint, "reader": card["Reader"], "request": card["Arrives-with"], "application_case": card["Application-case"], "questions": questions(contract), "rendered_article": fragment}
            (case / "input.json").write_text(json.dumps(packet, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
            (case / "article.html").write_text(readable(tree), encoding="utf-8")
            group = "reader-a" if (index % 2 == int(damaged)) else "reader-b"
            groups[group].append(str(case))
            key.append({"case": str(case), "route": card["Route"], "page": str(base_page), "card": str(source_card), "intact": not damaged, "kind": kind, "seeded_defect": defect})
    (directory / "private-key.json").write_text(json.dumps(key, indent=2) + "\n", encoding="utf-8")
    for group, cases in groups.items():
        (directory / (group + ".json")).write_text(json.dumps(cases, indent=2) + "\n", encoding="utf-8")
    print("Prepared 10 neutral cases; evaluator-only key saved separately.")


if __name__ == "__main__":
    main()
