export default (state=false, action) => {
    
    let {type, payload} = action;
    
    switch(type) {
        case "LOGIN":
            return true;
            
        case "LOGOUT":
            return false;
            
        default:
            return state;
    }
}