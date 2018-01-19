/* global __API_URL__ */

import superagent from 'superagent';
import cookie from 'react-cookies';

export const update = (user) => (dispatch) => {
    
    let token = cookie.load('X-BBB-Token');
    
    if ( token ) { 
        
        superagent.put( `${__API_URL__}/user`)
            .set('Authorization', `Bearer ${token}`)
            .send(user)
            .then(response => {
                dispatch( updateAction(response.body) );
            })
            .catch(console.error);
    }
};

const updateAction = (user) => ({
    type: "UPDATE_PROFILE",
    payload: user
});