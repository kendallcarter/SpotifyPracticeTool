import React from 'react'
import useAmpScript from '../hooks/useAmpScript'
import ampScript from '../amplifier/ampScript'

export default function Visualizer() {
    useAmpScript(
        {ampScript},
        "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      )
  return ( 
    <body>
  
  <main>

    <div className="containter d-flex justify-content-center">
      
       <div className="grid">
       
        <label htmlFor="volume">Volume</label>
        <input type = "range" min="0" max="1" value=".5" step=".01" id="volume"/>
        <label htmlFor="bass">Bass</label>
        <input type = "range" min="-10" max="10" value="0" id="bass"/>
        <label htmlFor="mids">Mids</label>
        <input type = "range" min="-10" max="10" value="0" id="mids"/>
        <label htmlFor="treble">Treble</label>
        <input type = "range" min="-10" max="10" value="0" id="treble"/>
        <label htmlFor="distortion">Distortion</label>
        <input type = "range" min="0" max="1" value="0" step=".01" id="distortion"/>
        
       </div>
       <canvas id="visualizer" style="position: fixed;z-index: -1;pointer-events: none;width: 100%;bottom: 0;height: 150%;"></canvas>
       
          
    </div>

  </main>
  <footer>
    
  </footer>
  {/* <script>
    const volume = document.getElementById("volume")
    const bass = document.getElementById("bass")
    const treble = document.getElementById("treble")
    const middle = document.getElementById("mids")
    const visualizer = document.getElementById("visualizer")



    const context = new AudioContext()

    const analyzerNode = new AnalyserNode(context,{fftSize:512})

    const gainNode = new GainNode(context, { gain: volume.value})
    const bassEq = new BiquadFilterNode(context, {
    type: 'lowshelf',
    frequency: 500,
    gain: bass.value
    })
    const midEq = new BiquadFilterNode(context, {
    type: 'peaking',
    Q: Math.SQRT1_2,
    frequency: 1500,
    gain: mids.value
    })
    const trebleEq = new BiquadFilterNode(context, {
    type: 'highshelf',
    frequency: 3000,
    gain: treble.value
    })

    setupEventListeners()
    setupContext()
    resize()
    createVisualizer()


    function setupEventListeners() {
        window.addEventListener('resize', resize)
    
        volume.addEventListener('input', e => {
        const value = parseFloat(e.target.value)
        gainNode.gain.setTargetAtTime(value, context.currentTime, .01)
        })
    
        bass.addEventListener('input', e => {
        const value = parseInt(e.target.value)
        bassEq.gain.setTargetAtTime(value, context.currentTime, .01)
        })
    
        mids.addEventListener('input', e => {
        const value = parseInt(e.target.value)
        midEq.gain.setTargetAtTime(value, context.currentTime, .01)
        })
    
        treble.addEventListener('input', e => {
        const value = parseInt(e.target.value)
        trebleEq.gain.setTargetAtTime(value, context.currentTime, .01)
        })
    }

    async function setupContext(){
        const instrument = await getInstrument()
        if(context.state === "suspended"){
            await context.resume()
        }
        const source = context.createMediaStreamSource(instrument)
        source
        .connect(bassEq)
        .connect(midEq)
        .connect(trebleEq)
        .connect(gainNode)
        .connect(analyzerNode)
        .connect(context.destination)
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

        const width = visualizer.width
        const height = visualizer.height
        const barWidth =    width / bufferLength

        const canvasContext = visualizer.getContext("2d")
        canvasContext.clearRect(0,0,width,height)
        dataArray.htmlForEach((item, index) => {
            const y = item / 255 * height /2
            const x = index * barWidth
            canvasContext.fillStyle = "rgb(0,0,0)"
            canvasContext.fillRect(x*4, height - y, barWidth*4, y)
        })

    }

    function resize(){
        visualizer.width = visualizer.clientWidth * window.devicePixelRatio
        visualizer.height = visualizer.clientHeight * window.devicePixelRatio
    }
  </script> */}
</body>
  )
}
