import {combineReducers} from 'redux';

import todoReducer from '../components/todo/reducer';


export default combineReducers({
    todo: todoReducer
});