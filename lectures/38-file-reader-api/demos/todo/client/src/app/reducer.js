import {combineReducers} from 'redux';

import todoReducer from '../components/todo/reducer';
import authReducer from '../components/auth/reducer';
import profileReducer from '../components/profile/reducer';


export default combineReducers({
    todo: todoReducer,
    profile: profileReducer,
    auth: authReducer
});