import { createStore, applyMiddleware } from 'redux';
import rootModule from '../modules/rootModule';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootModule, composeWithDevTools(applyMiddleware(reduxThunk, logger)));

export default store;