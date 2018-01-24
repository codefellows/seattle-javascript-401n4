import {createStore, applyMiddleware} from 'redux';

import reducer from './reducer/';
import reporter from '../middleware/reporter'
import thunk from '../middleware/thunk'
import {ioMiddleware} from '../components/chat/io';

export const store = createStore(reducer, applyMiddleware(ioMiddleware, thunk,reporter));