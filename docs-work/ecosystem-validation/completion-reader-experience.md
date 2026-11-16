# Reader-experience testing — November 9, 2026

**Interactive result: unavailable, not PASS.** The supported browser-control runtime failed before inventory or navigation with `failed to write kernel assets: Het systeem kan het opgegeven pad niet vinden. (os error 3)`. The computer-use skill's Node runtime failed to initialize with the same error. This is a tooling failure in this session, not evidence that the public preview failed or that no browser exists on the machine. No browser, OS settings or service was restarted or changed.

| Requested check | Evidence available | Acceptance boundary |
| --- | --- | --- |
| Desktop/mobile navigation | Current navigation/route checks and prior component regressions; preview HTTP output contains links to the new developer routes. | No viewport interaction, mobile menu, scrolling or touch check. |
| Keyboard navigation/focus | Source includes focus management, current-page semantics and reduced-motion handling. | No observed Tab/Shift+Tab/Escape order or visible focus check. |
| Screen-reader labels/landmarks | Source labels search, read-aloud control group and code-copy controls; generated HTML is checked separately. | No assistive-technology session, landmark navigation or spoken announcements. |
| Search/code-copy | Automated current-source/mocked regressions, local index consistency and preview index content comparison. | No actual search selection, clipboard write or browser permission outcome. |
| Long tables/code examples | MDX compilation and rendered target checks pass in the final build. | No mobile overflow, zoom, table exploration or long-code scrolling inspection. |
| Read aloud/failure/fallback | Existing regressions exercise refused/network/stalled responses, abort/reset, stale work and one-time browser fallback behavior. | No real audio playback, browser voice availability, audible order or denied-autoplay interaction. Nested-list reading and mobile table reading still need human testing. |

The preview's HTTP responses, even when they match the current article/search content, do not close these interactive checks. A human should test the public preview on desktop and mobile, with keyboard and a screen reader, including a failed read-aloud request and browser fallback. No passing interactive result was inferred from static markup or mocked audio.
