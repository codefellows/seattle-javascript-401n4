/* global __API_URL__ */

import superagent from 'superagent';
import cookie from 'react-cookies';

export const updateProfile = user => dispatch => {
    
    let URL = `${__API_URL__}/user/${user._id}`;
    
    superagent.put(URL)
        .set('Authorization', 'Bearer ' + bearerToken())
        .field('firstname', user.firstname)
        .field('lastname', user.lastname)
        .field('about', user.about)
        .attach('avatar', user.avatarFile)
        .then(res => dispatch(updateProfileAction(res.body)) )
        .catch(console.error);
    
}

const updateProfileAction = user => ({
    type:"UPDATE_PROFILE",
    payload: user
});

let bearerToken = () => {
    return cookie.load('auth');
}