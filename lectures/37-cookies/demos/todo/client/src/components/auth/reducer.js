
let defaultState = {init:true};

// {token:alsadkfjlsadkjfdsljsdflj}

export default (state=defaultState,action) => {

    let {type,payload} = action;

    switch(type) {

        case "SET_AUTH_TOKEN":
            return {token:payload.token};
            
        case "SET_AUTH_USER":
            return {token:payload.token};

        case "DELETE_AUTH_TOKEN":
            return defaultState;

        default:
            return state;

    }

};