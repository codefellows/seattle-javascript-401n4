
let defaultState = {};

export default (state=defaultState,action) => {

    let {type,payload} = action;

    switch(type) {

        case "SET_AUTH_TOKEN":
            return Object.assign({}, state, payload);

        case "DELETE_AUTH_TOKEN":
            return defaultState;

        default:
            return state;

    }

};