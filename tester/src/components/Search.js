import React from 'react'
import TrackSearchResult from '../TrackSearchResult'
import Form from'react-bootstrap/Form'

export default function Search({search, setSearch, searchResults, playTrack}) {
  return (
    <div className = "container" style={{overflowY:"clip", maxHeight: "54.300em"}}>
    <Form.Control
    type="search"
    placeholder="Search Songs/Artists"
    value={search}
    onChange={e => setSearch(e.target.value)}
    />  
    
    <div className=" container list-group" style={{overflowY:"scroll", maxHeight: "54.300em"}}>
      {searchResults.map(track => (
        <TrackSearchResult key={track.uri} track={track} playTrack={playTrack}/>
      ))}
    </div>

  </div>
  )
}
