const initialState = {};

export default (state=initialState, action) => {

    let {type, payload={}} = action;
    let {id, categoryId} = payload;
    let categoryCards = state[categoryId];

    switch ( type ) {

        case "CATEGORY_ADD":
            return {...state, [payload.id]:[]};

         case "CATEGORY_DELETE":
            let  {[payload]:x, ...newState} = state;
            return newState;

        case "CARD_ADD":
            return {...state, [categoryId]: [...categoryCards, payload]};

        case "CARD_DELETE":
            let deleteCategoryCardList = categoryCards.filter( (card,i) => card.id !== id );
            return {...state, [categoryId]: deleteCategoryCardList};

        case "CARD_UPDATE":
            let updateCategoryCardList = categoryCards.map( (card,i) => card.id === id ? payload : card );
            return {...state, [categoryId]: updateCategoryCardList};

        default:
            return state;

    }
};

/*
    {
      categoryID: [ {id:xxx,title:xxx,categoryID:xxx}, ... ]
    }
*/