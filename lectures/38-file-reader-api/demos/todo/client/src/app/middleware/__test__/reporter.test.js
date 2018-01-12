import {createStore, applyMiddleware} from 'redux';
import reporter from '../reporter';

// Simulate an error or simulate something good just return statel
let mockStore = () => {
    let reducer = (state=0, action) => {
        let {type,payload} = action;
        switch(type) {
            case "ERROR":
                throw new Error("WAT?");
            default:
                return state;
        }
    }

    return createStore(reducer, applyMiddleware(reporter));
}

describe('redux-reporter', () => {

   test('dispatch should return the action', () => {

       let store = mockStore();

       let action = {type:"normal", payload:{name:"John"}};

       let result = store.dispatch(action);

       expect(result).toEqual(action);
       expect(store.getState()).toEqual(0);

   });

   test('logs errors properly without crashing the app', () => {

       let store = mockStore();

       let action = {type:"ERROR", payload:{name:"John"}};

       let result = store.dispatch(action);

       expect(result).toBeInstanceOf(Error);
       expect(result.action).toEqual(action);
       expect(result.message).toEqual('WAT?'); // We get our defined error back
       expect(store.getState()).toEqual(0); // State should not be changed

   });

});