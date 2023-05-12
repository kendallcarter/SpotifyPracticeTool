import React from 'react'
import { Image, Button } from 'react-bootstrap'
import Sliders from './components/Sliders';
import { BrowserRouter as Router, Routes, Route, Link, useMatch, useResolvedPath } from'react-router-dom';
import Amplifier from './components/Amplifier';
import { useState, useEffect } from 'react';



export default function Sidebar({setShowSearch}) {
    const [gainValue, setTheGainValue] = useState();
    const [bassValue, setTheBassValue] = useState();
    const [midValue, setTheMidValue] = useState();
    const [highValue, setTheHighValue] = useState();

    var gainState = {};

    const updateGainState = obj => {
      this.gainValue.setState({ ...obj }, () => console.log(this.gainValue));
    };

    var bassState = {};

    const updateBassState = obj => {
      this.setState({ ...obj }, () => console.log(this.bassState));
    };

    var midState = {};

    const updateMidState = obj => {
      this.setState({ ...obj }, () => console.log(this.midState));
    };

    var highState = {};

    const updateHighState = obj => {
      this.setState({...obj }, () => console.log(this.highState));
    };
    function returnChange(){
        return "hidden"
    }

    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true })
      
        return (
          <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
              {children}
            </Link>
          </li>
        )
      }
  return (
    <>
        <div className="d-flex flex-column p-3 text-white bg-dark" style={{width: "0.625", height: "91vh"}}>
        
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            {/* <Image src="icons/SpotifyIcon.png" alt="" width="32" height="32" className="rounded-circle me-2"/> */}
            <img src={require('./icons/spotLogo2.png')} alt="" width="42" height="42" className="rounded-circle me-2"/>
            <span className="fs-6">Spotify Practice Tool</span>
            </Link>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
            
                <CustomLink to="/" className="nav-link text-white bg-success " aria-current="page">
                <img src={require('./icons/magnifying-glass.png')} alt="" width="22" height="22" className="rounded-circle me-2"/>
                Search
                </CustomLink>
            
                <CustomLink path="/Amp" element={<Amplifier />} className="nav-link text-white" onClick={() => setShowSearch(true)}>
                <img src={require('./icons/classic-acoustic-guitar.png')} alt="" width="22" height="22" className="rounded-circle me-2"/>
                Amplifier
                </CustomLink>
                
                
            
            </ul>
            <hr/>

            <div className="containter d-flex justify-content-center">
                <Sliders setGainValue={setTheGainValue} setBassValue={setTheBassValue} setMidValue={setTheMidValue} setHighValue={setTheHighValue}/>  
                
              
            </div>

            <hr/>
            <div >
            <Link to="https://www.spotify.com/us/account/overview/?utm_source=spotify&utm_medium=menu&utm_campaign=your_account" className="d-flex align-items-center text-white text-decoration-none" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={require('./icons/userImage.png')} alt="" width="32" height="32" className="rounded-circle me-2"/>
                <strong>Kendall C</strong>
            </Link>
            
            </div>
    </div>
  

    </>
  )
}
