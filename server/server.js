const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const SpotifyWebApi = require("spotify-web-api-node")

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken,
  })

  spotifyApi
    .refreshAccessToken()
    .then(data => {
      console.log(data.body)
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      })
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(400)
    })
})

app.post("/login", (req, res) => {
  const code = req.body.code
  
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000/',
    clientId: '36e63fd78f624ae6ab0723817ee3582c',
    clientSecret: '155dfd09c33645dea36d7fbd267aabf2',
  })

  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
      
    })
    .catch(err => {
      res.sendStatus(400)
    })
})

app.post("/login", (req, res) => {
  const code = req.body.code
  
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000/',
    clientId: '36e63fd78f624ae6ab0723817ee3582c',
    clientSecret: '155dfd09c33645dea36d7fbd267aabf2',
  })

  spotifyApi
    .getMe(code)
    .then(data => {
      console.log('Some information about the authenticated user', data.body)
      
    })
    .catch(err => {
      res.sendStatus(400)
      console.log('USER GET ERROR')
    })
})


app.listen(3001)