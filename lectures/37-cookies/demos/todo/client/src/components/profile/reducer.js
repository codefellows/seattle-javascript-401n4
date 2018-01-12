
let defaultState = {};

export default (state=defaultState,action) => {

    let {type,payload} = action;

    switch(type) {

        case "SET_AUTH_USER": {
            return payload.user;
        }
        
        case "UPDATE_PROFILE":
            return Object.assign({}, state, payload);

        case "DELETE_PROFILE":
            return defaultState;

        default:
            return state;

    }

};