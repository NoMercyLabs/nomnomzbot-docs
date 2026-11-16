## Explain what the player is doing

Use a reply such as `Now playing: {music.now}` after setting up the [music player](/reference/music/music-player).
Queue helpers describe requests that are waiting, while `music.now` describes the current track.
Reading one of these values does not play a track, open requests, or change the queue.

The four `music.favorite.*` values are a special case: the **Song request favorite** pipeline step supplies them for later steps in that run.
Likewise, `{track_name}` and `{playlist_id}` belong to the playlist-add action's message.
They are not general-purpose lookups for an ordinary command reply.
