import { createStore, applyMiddleware } from 'redux';
import rootModule from '../modules/rootModule';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["cart"]
}

const persistedReducer = persistReducer(persistConfig, rootModule);

export const store = createStore(
    persistedReducer, 
    composeWithDevTools(
        applyMiddleware(reduxThunk, logger)
    )
);

export const persistor = persistStore(store)

export default store;