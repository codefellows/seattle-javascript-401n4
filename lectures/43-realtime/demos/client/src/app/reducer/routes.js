let defaultRoute = "/login";

export default (state=defaultRoute, action) => {
    
    let {type, payload} = action;
    
    switch(type) {
        
        case "SWITCH_ROUTE":
            return payload;
            
        case "LOGOUT": 
            return "/login";
            
        case "LOGIN":
            return "/chat";
        
        default:
            return state;
    }
    
}