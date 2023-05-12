import React from 'react';
import './style.css';
import Login from './Login';
import Dashboard from './Dashboard';
import Amplifier from './components/Amplifier';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';

export default function App() {
  const code = new URLSearchParams(window.location.search).get('code');


  return (
    
    <>
      
    
    
    {/* <nav className="navbar navbar-expand-sm bg-dark justify-content-center navbar-dark">
      
      <div className="navbar-container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="#">Spotify Practice Tool</a>
          </li>
        </ul>
      </div>
    
    </nav> */}
     <div className="container-fluid" style={{overflowX:"hidden", paddingLeft:0, paddingRight:0}}> 
     <Router>  
            <Routes>
              <Route path="/" element={code ? <Dashboard code={code}/> : <Login />} />
              <Route path="/Amp" element={<Amplifier />} />
            </Routes>

          </Router>
      </div>
       
     
         
    
    

    </>
  );
}
