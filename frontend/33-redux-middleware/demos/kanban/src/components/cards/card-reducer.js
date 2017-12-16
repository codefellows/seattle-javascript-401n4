const initialState = {};

let validateCard = (card) => {
    if ( ! card.title ) {
        throw new Error("Missing Title");
    }
}

export default (state=initialState, action) => {

    let {type, payload={}} = action;
    let {id, categoryId} = payload;
    let categoryCards = state[categoryId];

    switch ( type ) {

        case "CATEGORY_ADD":
            return {...state, [payload.id]:[]};

         case "CATEGORY_DELETE":
            let  {[payload]:deleted, ...newState} = state;
            return newState;

        case "CARD_ADD":
            validateCard(payload);
            return {...state, [categoryId]: [...categoryCards, payload]};

        case "CARD_DELETE":
            validateCard(payload);
            let deleteCategoryCardList = categoryCards.filter( (card,i) => card.id !== id );
            return {...state, [categoryId]: deleteCategoryCardList};

        case "CARD_UPDATE":
            validateCard(payload);
            let updateCategoryCardList = categoryCards.map( (card,i) => card.id === id ? payload : card );
            return {...state, [categoryId]: updateCategoryCardList};

        default:
            return state;

    }
};

/*
    categories: [1]
    cards: {
      1: [ {id:xxx,title:xxx,categoryID:xxx}, ... ]
    }
*/