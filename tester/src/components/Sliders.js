import React from 'react'
import useAmpScript from '../hooks/useAmpScript'
import ampScript from '../amplifier/ampScript'
import { useState, useEffect } from 'react';


export default function Sliders({setGainValue, setBassValue, setMidValue, setHighValue}) {
    // useAmpScript(
    //     {ampScript},
    //     "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    //   )
    const [gainValue, setTheGainValue] = useState(.5);
    const [bassValue, setTheBassValue] = useState(0);
    const [midValue, setTheMidValue] = useState(0);
    const [highValue, setTheHighValue] = useState(0);
    
    const handleGainChange = (e) => {
        
        var that = this;
        //console.log(e.target.value)
        setGainValue({value: e.target.value});
       
        return function () {
            that.setState({
            gainValue: e.target.value
            });
            that.setGainValue(gainValue);
        }     
    }
    const handleBassChange = (e) => {
        // setTheGainValue({value: e.target.value});
        var that = this;
        setTheBassValue({value: e.target.value});
        return function () {
            that.setState({
            bassValue: e.target.value
            });
            that.props.setBassValue(bassValue);
        }
    }
    const handleMidChange = (e) => {
        // setTheGainValue({value: e.target.value});
        var that = this;
        setTheMidValue({value: e.target.value});
        return function () {
            that.setState({
            midValue: e.target.value
            });
            that.props.setMidValue(midValue);
        }
    }
    const handleHighChange = (e) => {
        // setTheGainValue({value: e.target.value});
        var that = this;
        setTheHighValue({value: e.target.value});
        return function () {
            that.setState({
            highValue: e.target.value
            });
            that.props.setHighValue(highValue);
        }
    }
    
  return (
    <>

    <div className="grid">
                    <div className="grid-item row" style={{paddingBottom: ".5rem", paddingTop: ".5rem"}}>
                        <label htmlFor="volume" style={{paddingRight: ".5rem"}}>Volume</label>
                        <input type = "range" min="0" max="1" defaultValue=".5" onChange={(e) => handleGainChange(e)} step=".01" id="volume"/>
                    </div>
                    <div className="grid-item row" style={{paddingBottom: ".5rem", paddingTop: ".5rem"}}>
                        <label htmlFor="bass" style={{paddingRight: ".5rem"}}>Bass</label>
                        <input type = "range" min="-10" max="10" defaultValue="0" onChange={(e) => handleBassChange(e)} id="bass"/>
                    </div>
                    <div className="grid-item row" style={{paddingBottom: ".5rem", paddingTop: ".5rem"}}>
                        <label htmlFor="mids" style={{paddingRight: ".5rem"}}>Mids</label>
                        <input type = "range" min="-10" max="10" defaultValue="0" onChange={(e) => handleMidChange(e)} id="mids"/>
                    </div>
                    <div className="grid-item row" style={{paddingBottom: ".5rem", paddingTop: ".5rem"}}>
                        <label htmlFor="treble" style={{paddingRight: ".5rem"}}>Treble</label>
                        <input type = "range" min="-10" max="10" defaultValue="0"  onChange={(e) => handleHighChange(e)} id="treble"/>
                  </div> 
                  <div className="grid-item">
                  </div> 
                </div> 
                </>
  
)}
