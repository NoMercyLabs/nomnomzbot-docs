# Reader review: src/content/reference/en/templates/lookup.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/lookup.mdx
Reviewed-SHA: 6f3da75f021f1c1b

Tests:
1. Find a helper: "look up facts outside the channel" (L8) matches the weather, currency, translate and Twitch rows. Found.
2. Use a helper: `{lookup.weather:Amsterdam}` gives `Amsterdam: 12 °C, light rain` (L23). `{lookup.currency:10|EUR|USD}` gives `10 EUR = 11.62 USD` (L14). Both typed.
3. Intro (L6-8) names `{lookup.*}`. Every row is `lookup.`. Footer links to the overview.
4. Backticks correct. Table is intact.

Findings:
- [L17] `{lookup.game:name.boxart}`: "name" is not marked as a placeholder. The reader may type the word literally. Fix: write `{lookup.game:<game name>.boxart}`.
- [L19] `{lookup.time}`: "Off when the bot runs in saas mode." The reader does not know what saas mode is or what they see when it is off. Fix: say what the result is and where the mode is set. Also "the optional fields date and offset" gives no syntax.
- [L21] `{lookup.translate.chat}`: the example `good morning` is the input, not a translation. The reader cannot see what the helper gives. Fix: show the translated result.
- [L22] `{lookup.twitch}`: "followage:channel" has a colon inside the field name, which also separates the input. The typed form is unclear. Fix: show `{lookup.twitch:login.followage}` or whatever the exact form is, with a result.
- [L15] `{lookup.currency.date}`: "with an optional from|to pair (EUR|USD by default)." No syntax shown. Finding only.
