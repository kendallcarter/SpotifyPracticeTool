// const volume = document.getElementById("volume")
// const bass = document.getElementById("bass")
// const treble = document.getElementById("treble")
// const middle = document.getElementById("mids")
// const visualizer = document.getElementById("visualizer")



// const context = new AudioContext()

// const analyzerNode = new AnalyserNode(context,{fftSize:512})

// const gainNode = new GainNode(context, { gain: volume.value})
// const bassEq = new BiquadFilterNode(context, {
//   type: 'lowshelf',
//   frequency: 500,
//   gain: bass.value
// })
// const midEq = new BiquadFilterNode(context, {
//   type: 'peaking',
//   Q: Math.SQRT1_2,
//   frequency: 1500,
//   gain: mids.value
// })
// const trebleEq = new BiquadFilterNode(context, {
//   type: 'highshelf',
//   frequency: 3000,
//   gain: treble.value
// })

// setupEventListeners()
// setupContext()
// resize()
// createVisualizer()


// function setupEventListeners() {
//     window.addEventListener('resize', resize)
  
//     volume.addEventListener('input', e => {
//       const value = parseFloat(e.target.value)
//       gainNode.gain.setTargetAtTime(value, context.currentTime, .01)
//     })
  
//     bass.addEventListener('input', e => {
//       const value = parseInt(e.target.value)
//       bassEq.gain.setTargetAtTime(value, context.currentTime, .01)
//     })
  
//     mids.addEventListener('input', e => {
//       const value = parseInt(e.target.value)
//       midEq.gain.setTargetAtTime(value, context.currentTime, .01)
//     })
  
//     treble.addEventListener('input', e => {
//       const value = parseInt(e.target.value)
//       trebleEq.gain.setTargetAtTime(value, context.currentTime, .01)
//     })
//   }

// async function setupContext(){
//     const instrument = await getInstrument()
//     if(context.state === "suspended"){
//         await context.resume()
//     }
//     const source = context.createMediaStreamSource(instrument)
//     source
//       .connect(bassEq)
//       .connect(midEq)
//       .connect(trebleEq)
//       .connect(gainNode)
//       .connect(analyzerNode)
//       .connect(context.destination)
// }

// function getInstrument(){
//     return navigator.mediaDevices.getUserMedia({audio: {
//         echoCancellation: false,
//         autoGainControl: false,
//         noiseSuppression: false,
//         sampleRate: 44100,
//         latency: 0
//     }})
// }

// function createVisualizer(){

//     requestAnimationFrame(createVisualizer)
//     const bufferLength = analyzerNode.frequencyBinCount
//     const dataArray = new Uint8Array(bufferLength)
//     analyzerNode.getByteFrequencyData(dataArray)

//     const width = visualizer.width
//     const height = visualizer.height
//     const barWidth =    width / bufferLength

//     const canvasContext = visualizer.getContext("2d")
//     canvasContext.clearRect(0,0,width,height)
//     dataArray.forEach((item, index) => {
//         const y = item / 255 * height /2
//         const x = index * barWidth
//         canvasContext.fillStyle = "rgb(0,0,0)"
//         canvasContext.fillRect(x*4, height - y, barWidth*4, y)
//     })

// }

// function resize(){
//     visualizer.width = visualizer.clientWidth * window.devicePixelRatio
//     visualizer.height = visualizer.clientHeight * window.devicePixelRatio
// }

