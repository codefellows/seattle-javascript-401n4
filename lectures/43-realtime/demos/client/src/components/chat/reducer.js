let defaultState = [];

export default (state=defaultState, {type, payload}) => {
  switch(type){
    
    case 'LOGIN': 
      return [...state, payload];
      
    case 'LOGOUT': 
      return defaultState;
      
    case 'USER_CONNECTED':
      return [...state, payload];
      
    case 'USER_DISCONNECTED':
      return [...state, payload];
      
    case 'MESSAGE':
      return [...state, payload];
      
    default:
      return state
  }
}
