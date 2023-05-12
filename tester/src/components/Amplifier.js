import React from 'react';
import useAuth from '../useAuth';
import { useState, useEffect,useRef } from 'react';
import SpotifyWebApi from'spotify-web-api-node';
import TrackSearchResult from '../TrackSearchResult';
import Player from '../Player';
import {Form} from "react-bootstrap"
import Sidebar from '../Sidebar';
import Visualizer from './Visualizer';
import { BrowserRouter as Router, Routes, Route, Link, useMatch, useResolvedPath } from'react-router-dom';






const spotifyApi = new SpotifyWebApi({
    clientId: '36e63fd78f624ae6ab0723817ee3582c',
    clientSecret: '155dfd09c33645dea36d7fbd267aabf2',
    redirectUri: 'http://localhost:3000',
})

const context = new AudioContext()
const analyzerNode = new AnalyserNode(context,{fftSize:1024})
const visualizer = document.getElementById("visualizer")

async function setupContext(){
  const instrument = await getInstrument()
  if(context.state === "suspended"){
      await context.resume()
  }
  const source = context.createMediaStreamSource(instrument)
  
  source
    .connect(analyzerNode)
    .connect(context.destination)
    createVisualizer()
    resize()
}

function getInstrument(){
  return navigator.mediaDevices.getUserMedia({audio: {
      echoCancellation: false,
      autoGainControl: false,
      noiseSuppression: false,
      sampleRate: 44100,
      latency: 0
  }})
}

function createVisualizer(){

  requestAnimationFrame(createVisualizer)
  const bufferLength = analyzerNode.frequencyBinCount
  const dataArray = new Uint8Array(bufferLength)
  analyzerNode.getByteFrequencyData(dataArray)

 
   const width = window.visualizer.width
     const height = window.visualizer.height
     const barWidth =    width / bufferLength

   const canvasContext = window.visualizer.getContext("2d")
   canvasContext.clearRect(0,0,200,200)
  dataArray.forEach((item, index) => {
      const y = item / 255 * height /2
      const x = index * barWidth
      
      canvasContext.fillStyle = "hsl(112, 50%, 66%)"
      canvasContext.fillRect(x*4, height - y - y, barWidth*2, y*8)
  })

}

function resize(){
  visualizer.width = window.visualizer.current.clientWidth * window.devicePixelRatio
  visualizer.height = window.visualizer.current.clientHeight * window.devicePixelRatio
}

export default function Amplifier({code}) {
  const accessToken = useAuth({code});
    
  const [search, setSearch] = useState(''); 
  const [searchResults, setSearchResults] = useState([]); 
  const [thePlayingTrack, setThePlayingTrack] = useState();
  const [ampVisualizer, setAmpVisualizer] = useState(false);
  const [showSearch, setShowSearch] = useState("initial");

  //Amp Visualizer data  
  const [file, setFile] = useState(null);
  const canvasRef = useRef();
  const audioRef = useRef();
  const source = useRef();
  const analyser = useRef();

  const handleAudioPlay = () => {};
  const visualizeData = () => {};

  setupContext()





    function playTrack(track) {
      setThePlayingTrack(track)
    }
    

    useEffect(() => {
      // if (!accessToken) return
      // //will run only once 
      // // use to set up the amplifier and check everything is working or maybe use custom hook to set up the amplifier, maybe put in app.js
      // spotifyApi
      // .setAccessToken(accessToken)
      // .getMe()
      // .then(function(data) {
      //   console.log('Some information about the authenticated user', data.body);
      // }, function(err) {
      //   console.log('Something went wrong!', err);
      // });
    }, [])

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken);
        
    }, [accessToken])
    

    useEffect(() => {
      
      if (!search) return setSearchResults([])
      if (!accessToken) return

      let cancel = false
      spotifyApi.searchTracks(search).then(res => {
        
        if (cancel) return
        setSearchResults(
          res.body.tracks.items.map(track => {

            const smallestAlbumImage = track.album.images.reduce(
              (smallest, image) => {
                if (image.height < smallest.height) return image
                return smallest
              },
              track.album.images[0]
            )


            return {
              artist: track.artists[0].name,
              title: track.name,
              uri: track.uri,
              albumUrl: smallestAlbumImage.url,
            }
          })
        )
      })
  
      return () => (cancel = true)
    }, [search, accessToken])

  return (
    < >
    <div>

    
    <div className="row " >
        <div className="col-2 h-100" style={{height: "100vh"}} >
          <Sidebar />
        </div>
        <div className="col-10">
        <Routes>
          <Route path="/Amp" element={<Amplifier />} />
        </Routes>
            <canvas id="visualizer" ref={canvasRef} style={{position: "fixed" ,zIndex: -1, pointerEvents: "none", width: "100vw", bottom: "0", height: "100vh"}}></canvas> 
          </div>
           
      </div>
      <footer className="fixed-bottom" >
                  <Player accessToken={accessToken} trackUri={thePlayingTrack?.uri}/>
        </footer>   
        </div>
      </>
  );
};


