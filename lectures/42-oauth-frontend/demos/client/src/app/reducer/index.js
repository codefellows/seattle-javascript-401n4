import {combineReducers} from 'redux';

import auth from "./auth";
import route from "./routes";
import profile from "./profile";

export default combineReducers({
    auth, route, profile
});