#!/bin/sh
# Usage: sh docs-work/gates.sh <status|coverage|map|reviews|links|style|all> (run from the docs repo root)
P=C:/Projects/NoMercyLabs/nomnomzbot
V=$P/dashboard/src/views/dashboard
SRC="$V/analytics $V/catalog $V/channel-points $V/chat $V/commands $V/discord $V/economy $V/event-responses $V/games $V/giveaways $V/home $V/media-share $V/music $V/obs $V/overlays $V/people $V/picklists $V/pipelines $V/polls $V/quotes $V/sounds $V/stream $V/supporters $V/timers $V/tts $V/voice-triggers $V/vts $V/settings $V/scripts"
SRC="$SRC $P/dashboard/src/views/site/login $P/dashboard/src/views/site/setup $P/dashboard/src/views/viewer $P/dashboard/src/layouts/dashboard"
SRC="$SRC $P/dashboard/src/api/nnz-widget.d.ts"
SRC="$SRC $P/server/src/NomNomzBot.Api/Controllers"
for f in Alerts Chat Commands Community CustomEvents Dashboard Economy Engagement Games Giveaways Identity Import Integrations Marketplace MediaShare Moderation Music Notifications Obs Overlays PickLists Quotes Raids Rewards Sound Supporters Trust Tts ViewerData Vts Widgets AutomationApi; do
  SRC="$SRC $P/server/src/NomNomzBot.Application/$f"
done
SRC="$SRC $P/server/src/NomNomzBot.Infrastructure/DevPlatform $P/server/src/NomNomzBot.Infrastructure/CustomCode"
SK=C:/Projects/NoMercyLabs/skills/skills/atlas/scripts/check_docs.py
exec python -E -s "$SK" "$1" --map docs-work/map.md --src $SRC --docs src/content/reference/en
