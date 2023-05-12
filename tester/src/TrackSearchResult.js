import React from "react"

export default function TrackSearchResult({ track, playTrack }) {
  function handlePlay() {
    playTrack(track)
  }

  return (
    <div
      className="d-flex m-2 align-items-center p- list-group-item list-group-item-action"
      style={{ cursor: "pointer"}}
      onClick={handlePlay}
    >
      <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
      <div className="ml-3">
        <div style={{ paddingLeft: ".5em" }}>{track.title}</div>
        <div className="text-muted"style={{ padding: ".5em" }}>{track.artist}</div>
      </div>
      
    </div>
  )
}