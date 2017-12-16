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

let validateCategory = (category) => {
    if (! category.title ) {
        throw new Error("Need a title");
    }
}

export default (state=initialState, action) => {

    let {type, payload} = action;

    switch ( type ) {

        case "CATEGORY_ADD":
            validateCategory(payload);
            return [...state, payload];

         case "CATEGORY_UPDATE":
            return state.map( (item,i) => item.id === payload.id ? payload : item );

         case "CATEGORY_DELETE":
            return state.filter( (item,i) => item.id !== payload );

        default:
            return state;

    }
};