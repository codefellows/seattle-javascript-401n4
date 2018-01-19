/* global __API_URL__, __GOOGLE_CLIENT_ID__ */

import React from 'react';
import querystring from 'querystring';

class Login extends React.Component {
    
    render() {
        
    	let googleURL = "https://accounts.google.com/o/oauth2/v2/auth";
		
		let options = {
			client_id:__GOOGLE_CLIENT_ID__,
			redirect_uri: `${__API_URL__}/oauth/google/code`,
			scope: 'email openid profile',
			prompt: 'consent',
			response_type: 'code'
		}
		
		let QueryString = querystring.stringify(options);
		
		let authURL = `${googleURL}?${QueryString}`;
        
        return (
            <React.Fragment>
               <a href={authURL}>Login With Google</a>
            </React.Fragment>
        )
    }
}

export default Login;
