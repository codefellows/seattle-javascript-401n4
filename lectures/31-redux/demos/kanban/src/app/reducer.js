const initialState = [];

/*
    [
      {
        id: xxxx,
        createDate: 11/11/11,
        title: 'zzzz'
      }
    ]
*/


export default (state=initialState, action) => {

    let {type, payload} = action;

    switch ( type ) {

        case "CATEGORY_ADD":
            return [...state, payload];

         case "CATEGORY_UPDATE":
            return state.map( (item,i) => item.id === payload.id ? payload : item );

         case "CATEGORY_DELETE":
            return state.filter( (item,i) => item.id !== payload );

        default:
            return state;

    }
};