# Fact check: src/content/reference/en/templates/charity.mdx
Verdict: PASS
Reviewed: C:/Projects/NoMercyLabs/nomnomzbot-docs/src/content/reference/en/templates/charity.mdx
Reviewed-SHA: 8119d4bf45afba1b

Product: origin/master 779081d10d05dc6b4150732abd77bfae4dbef1d9 (fetched this run; every file read with `git show origin/master:<path>`).
Paths below are short: `LiveEvents/` = server/src/NomNomzBot.Infrastructure/Platform/Templating/Helpers/LiveEvents/; `xml` = server/i18n/strings/values/strings_template_liveevents2.xml.

## Method

All 8 rows were checked (the page has 8).
A script (scratchpad fcD-cmp.py) compared each description cell with the first line of the English string, and each example with the helpers.json sample.
Result: 8 of 8 descriptions equal the product text; 8 of 8 examples equal the sample.
Each render function was then read for the example.

## Rows

| Key | Product row | Description = English text | Example plausible | Why |
| --- | --- | --- | --- | --- |
| charity.bar | LiveEvents/CharityCampaignHelpers.cs:39-43 | yes (xml:42) | yes | LiveText.Bar (LiveText.cs:40-50): 42% of 10 cells fills 4, then the percent. |
| charity.donations.count | LiveEvents/CharityDonationHelpers.cs:18-22 | yes (xml:44) | yes | Grouped `Max(page.Total, page.Items.Count)`. See the product defects. |
| charity.donations.latest | LiveEvents/CharityDonationHelpers.cs:23-30 | yes (xml:45) | yes | `{UserName} ({Money})` of the first item of the page. |
| charity.link | LiveEvents/CharityCampaignHelpers.cs:19-23 | yes (xml:43) | yes | The charity website; nothing when it is blank. |
| charity.name | LiveEvents/CharityCampaignHelpers.cs:18 | yes (xml:38) | yes | The charity name of the active campaign (LiveCharityRows.cs:21-36). |
| charity.percent | LiveEvents/CharityCampaignHelpers.cs:34-38 | yes (xml:41) | yes | 420.00 of 1,000.00 gives `42%` (LiveText.cs:36-37). |
| charity.raised | LiveEvents/CharityCampaignHelpers.cs:24-28 | yes (xml:39) | yes | LiveText.Money: symbol plus the value with its decimal places (LiveText.cs:60-67); EUR maps to `€` through RegionInfo (Numbers/NumberCurrencies.cs:22-40). |
| charity.target | LiveEvents/CharityCampaignHelpers.cs:29-33 | yes (xml:40) | yes | Money of the target: `€1,000.00` in an English culture (N2 groups the thousands). |

The samples agree with each other: €420.00 of €1,000.00 is 42%, and the bar shows 42%.

## Intro check

- Page line 6, `{charity.*}`: every row key starts with `charity.`. True.
- Line 8, "These helpers read a charity campaign: its name, target and the amount raised": the rows read the active campaign and its donations from Twitch (LiveEvents/LiveCharityData.cs:57-72); name, target and raised are rows on the page. True.
- Line 9, "Use them to show progress in chat, on an overlay or read aloud": the overlay SDK renders templates through the one resolver (server/src/NomNomzBot.Api/Controllers/V1/OverlayController.cs:153-170). The speech pipeline action does too (server/src/NomNomzBot.Infrastructure/Tts/PipelineActions/PlayTtsAction.cs:32-35). True.
- Line 11, the rows are separate examples: true.
- The intro names no helper that is not on the page.

## Row count

8 table rows. docs-work/helper-groups.md "## Types" line 23 gives Count 8 for /reference/templates/charity. The front matter (line 3) says 8. Equal.

## Product defects

- `charity.donations.count` counts at most one page of donations. The bot asks for one page of 100 (`TwitchPageRequest` PageSize 100, server/src/NomNomzBot.Application/Contracts/Twitch/TwitchPage.cs:15; the call at LiveEvents/LiveCharityData.cs:69-70 and server/src/NomNomzBot.Infrastructure/Platform/Transport/Helix/SubClients/TwitchCharityApi.cs:72-88). It then prints `Max(page.Total, page.Items.Count)` (CharityDonationHelpers.cs:21). Whether Twitch fills a total for this endpoint was not checked. If it does not, a campaign with more than 100 donations shows 100, while the text says "How many donations the campaign has" (xml:44).
- `charity.donations.latest` takes the first item of the page (CharityDonationHelpers.cs:29) on the claim "newest first" (LiveCharityData.cs:54). The order of the Twitch answer was not checked against the live Twitch docs.

## Notes

- Earlier evidence (scratchpad fc6-result.md) passed this page on older text at product 18e2bf1f0; every claim above was re-read at 779081d10.
