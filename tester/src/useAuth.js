import React from 'react'
import { useState, useEffect } from'react'
import axios from 'axios'
import SpotifyWebApi from'spotify-web-api-node';

export default function useAuth({code}) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()
    const [profile, setProfile] = useState()
    
    const spotifyApi = new SpotifyWebApi({
      clientId: '36e63fd78f624ae6ab0723817ee3582c',
      clientSecret: '155dfd09c33645dea36d7fbd267aabf2',
      redirectUri: 'http://localhost:3000',
  })
            
  useEffect(() => {
    //makes the player slow down for some reason 
    if(accessToken) return
    
   axios
    .post('http://localhost:3001/login', {
    code,
   })
   .then(res => {
    setAccessToken(res.data.accessToken)
    setRefreshToken(res.data.refreshToken)
    setExpiresIn(res.data.expiresIn)
    window.history.pushState({}, null, '/')
    
   })
   .catch(res => {
    // window.location = '/'
    
   })
  }, [{code}])

  useEffect(() => {
    if (!refreshToken || !expiresIn) return
    const interval = setInterval(() => {
      axios
        .post("http://localhost:3001/refresh", {
          refreshToken,
        })
        .then(res => {
          setAccessToken(res.data.accessToken)
          setExpiresIn(res.data.expiresIn)
        })
        .catch((err) => {
          console.log(err)
          window.location = "/"
        })
    }, (expiresIn - 60) * 1000)

    return () => clearInterval(interval)
  }, [refreshToken, expiresIn])
  
  return accessToken
}
