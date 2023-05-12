import { useEffect } from 'react';

const useAmpScript = (url, integrity, async = true, crossOrigin = "anonymous") => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url, integrity, async, crossOrigin]);
};

export default useAmpScript;

/* <Routes>
        <Route path="/" element={
          <div className = "container" style={{overflowY:"clip",  paddingTop:"1em"}}>
          <Form.Control
          type="search"
          placeholder="Search Songs/Artists"
          value={search}
          onChange={e => setSearch(e.target.value)}
          />  
          
          <div className=" container list-group" style={{overflowY:"scroll",overflowX:"hidden", maxHeight: "85vh", height: "100vh"}}>
            {searchResults.map(track => (
              <TrackSearchResult key={track.uri} track={track} playTrack={playTrack}/>
            ))}
          </div>
           <canvas id="visualizer" ref={canvasRef} style={{position: "fixed" ,zIndex: -1, pointerEvents: "none", width: "100vw", bottom: "0", height: "100vh"}}></canvas>
          </div>
        } />
          <Route path="/Amp" element={
          <canvas id="visualizer" ref={canvasRef} style={{position: "fixed" ,zIndex: -1, pointerEvents: "none", width: "100vw", bottom: "0", height: "100vh"}}></canvas>
          } />
        </Routes> */