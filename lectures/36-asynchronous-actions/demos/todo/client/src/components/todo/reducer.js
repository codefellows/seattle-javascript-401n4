let initialState = [];

export default (state=initialState, action) => {

  let {type, payload} = action;

  switch(type) {

    case 'INIT':
        return payload || initialState;

    case 'CREATE':
        return [...state, payload];

    case 'UPDATE':
        return state.map(todo => todo._id === payload._id ? payload : todo);

    case 'DELETE':
        return state.filter(todo => todo._id !== payload._id);

    case 'RESET':
        return initialState;

    default:
        return state;
  }

};