let initialState = [];

export default (state=initialState, action) => {
    
  let {type, payload} = action;

  switch(type) {
    case 'CREATE': 
        return [...state, payload];
        
    case 'UPDATE': 
        return state.map(todo => todo.id === payload.id ? payload : todo);
        
    case 'DELETE': 
        return state.filter(todo => todo.id !== payload.id);
        
    case 'RESET': 
        return initialState;
    
    default: 
        return state;
  }
  
};