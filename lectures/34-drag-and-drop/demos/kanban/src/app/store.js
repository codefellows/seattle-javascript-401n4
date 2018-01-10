import {createStore, applyMiddleware} from 'redux';

import reducer from './reducer';
import reporter from './middleware/reporter'

export default () => createStore(reducer, applyMiddleware(reporter));
