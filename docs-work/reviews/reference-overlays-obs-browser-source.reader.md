# Reader review: reference-overlays-obs-browser-source (round 3)
Verdict: PASS
Reviewed: src/content/reference/en/overlays/obs-browser-source.mdx
Reviewed-SHA: 1747cdf5d034c9e2

## Round 2 blocking finding, status

- [round 2 B1, L66] Fixed. L66-72 now gives the size for an overlay you made: "1920 x 1080, full screen." It also gives the value for each of the two boxes. The reader can finish steps 6 to 8 with those values.

## Blocking findings

None.

## Non-blocking findings (style or clarity, do not decide the verdict)

- [L66] "The bot keeps no size for it" is a new claim. Not checked against the product code (reader review reads the page only).
- [L68-72] The table labels "Width and height", "Control audio via OBS" and "Shutdown source when not visible" are not all in bold, unlike the table at L58-62. Style only.
- [L7-8] The reader must still infer that step 7's "as the dialog shows" means the table at L68-72 for an own overlay. Consider "as the table below shows" in step 7.
- [L122-126 / set-up-overlays.mdx L66, L105] Re-checked this round: the row text **Not connected to the bot** is still not in the overview page's row-text table. set-up-overlays.mdx lists only **Nothing attached** for this state (grep, L66). A reader who reads the overview sees a fourth row text it never explains.
- [L82-84] The Test row text proves a browser source has the overlay open. It does not prove the alert shows on screen. A reader may take "Sent to this overlay" as proof the viewer sees it.
- [L24] "unless the bot's operator set a separate overlay address." This is a new claim. Not checked against the product code (reader review reads the page only).

## Density

Paragraphs over three sentences: none found.

Sentences with two ideas:
- [L24] "The link starts with the address you used to open the dashboard, unless the bot's operator set a separate overlay address." One fact with a condition in one sentence.
- [L36] "In OBS, add a source of the type **Browser** and paste the address into its URL field." Two actions in one sentence.

## Where I got lost

- L24: which operator, and what a "separate overlay address" looks like to a streamer.
- L122-126: which of "Add or refresh the browser source" and the OBS connection to try first.
