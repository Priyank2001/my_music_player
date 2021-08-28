import React from 'react'
import SpotifyWebApi from 'spotify-web-api-node';
import { getTokenFromResponse } from './spotify';

var client_id = 'ccbcd6b25aad4a39acfab99d6e4817d5'; // Your client id
var client_secret = '6cca2224f96045f389a4b982bb666c12'; // Your secret
var redirect_uri = 'http://localhost:3000/'; // Your redirect uri



function Auth() {
    return (
        <div>
            <a href="https://accounts.spotify.com/authorize">
                Login with Spotify
            </a>
            
        </div>
    )
}

export default Auth
