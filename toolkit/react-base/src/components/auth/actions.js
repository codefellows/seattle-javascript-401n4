import superagent from 'superagent';
import cookie from 'react-cookies';

export const authLogin = (user={}) => dispatch => {

    let token = cookie.load("auth");
    if ( token ) {
        dispatch(setToken(token));
        return;
    }

    return superagent.get(`${__AUTH_URL__}/login`)
        .withCredentials()
        .auth(user.username, user.password)
        .then(res => {
            dispatch(setToken(res.text));
            return res;
        })
        .catch( e => console.error('Authenticaton Error:', e.message) );
};

export const authCreateAccount = user => dispatch => {

    return superagent.post(`${__AUTH_URL__}/create`)
        .withCredentials()
        .send(user)
        .then(res => {
            dispatch(setToken(res.text));
            return res;
        })
        .catch( e => console.error('Authenticaton Error:', e.message) );
};


export const authLogout = () => ({
   type: "DELETE_AUTH_TOKEN"
});

const setToken = token => ({
   type: "SET_AUTH_TOKEN",
   payload: token
});

