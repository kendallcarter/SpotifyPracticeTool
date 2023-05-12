import React from 'react';

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=36e63fd78f624ae6ab0723817ee3582c&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
const code = new URLSearchParams(window.location.search).get('code');

const Login = ({code}) => {
  return (
    <div className='container h-100 p-3 '>
      <div className="row justify-content-center"><a className="btn btn-success btn-lg" href={AUTH_URL}>Login with Spotify</a></div>
      

    </div>
  );
};


export default Login;
