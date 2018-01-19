let defaultState = {};

export default (state=defaultState, action) => {
    
    let {type, payload} = action;
    
    switch(type) { 
        
        case "LOGIN":
            return payload || {};
            
        case "LOGOUT":
            return defaultState;
            
        case "UPDATE_PROFILE":
            return Object.assign({}, state, payload);
            
        default:
            return state;
        
    }
    
}