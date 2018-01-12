const littleRedux = reducer => {
    let state;
    let listeners = [];

    const getState = () => state;

        
    // the last 'middleware' is the actual dispatch
    // let middleware = [];
    // middleware.push( action => {
    //     state = reducer(state, action);
    //     listeners.forEach(listener => listener());
    // });
        

    const dispatch = action => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscribe = listener => {
        listeners.push(listener);
    };

    dispatch({});

    return { getState, dispatch, subscribe };
};

let actions = {
    INC: {
        type: 'INCREMENT',
        payload: { amount: 1 },
    },

    TWO: {
        type: 'INCREMENT',
        payload: { amount: 2 },
    },

    DEC: {
        type: 'DECREMENT',
    },
};

let reducer = (state = 0, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'INCREMENT':
            return state + payload.amount || 1;

        case 'DECREMENT':
            return state - 1;

        default:
            return state;
    }
};

let store = littleRedux(reducer);

let render = () => console.log(store.getState());

store.subscribe(render);

render();
store.dispatch(actions.INC);
store.dispatch(actions.INC);
store.dispatch(actions.INC);
store.dispatch(actions.INC);
store.dispatch(actions.INC);
store.dispatch(actions.INC);
