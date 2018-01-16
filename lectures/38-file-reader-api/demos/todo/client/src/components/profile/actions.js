/* global __API_URL__ */

import superagent from 'superagent';
import cookies from 'react-cookies';

export const updateUser = user => dispatch => {
    
    let token = cookies.load("auth");
    
    let URL = `${__API_URL__}/user/${user._id}`;
    
    superagent.put(URL)
        .set("Authorization", "Bearer " + token)
        .field('firstname', user.firstname)
        .field('lastname', user.lastname)
        .field('about', user.about)
        .attach('avatar', user.avatarFile)
        .then(res => {
            dispatch(updateUserAction(res.body));
        })
        .catch(e => console.error("ERROR", e.message));
    
    
};

const updateUserAction = user => ({
    type:"UPDATE_USER",
    payload: user
});
