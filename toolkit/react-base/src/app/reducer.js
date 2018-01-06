import {combineReducers} from 'redux';

import todoReducer from '../components/todo/reducer';
import authReducer from '../components/auth/reducer';


export default combineReducers({
    todo: todoReducer,
    auth: authReducer
});