import {combineReducers} from 'redux';

import categoryReducer from '../components/categories/category-reducer';
import cardReducer from '../components/cards/card-reducer';


export default combineReducers({
    categories: categoryReducer,
    cards: cardReducer
});