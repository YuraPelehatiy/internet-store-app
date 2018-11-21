import { createStore, applyMiddleware } from 'redux';
import rootModule from '../modules/rootModule';
import reduxThunk from 'redux-thunk';
//import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["cart", "app"]
}

const persistedReducer = persistReducer(persistConfig, rootModule);

/* export let store;

if (process.env.NODE_ENV === 'development') {
    store = createStore(
        persistedReducer, 
        composeWithDevTools(
            applyMiddleware(reduxThunk, logger)
        )
    );
} else {
    store = createStore(
        persistedReducer, 
        applyMiddleware(reduxThunk)
    );
} */

export const store = createStore(
    persistedReducer, 
    applyMiddleware(reduxThunk)
);

export const persistor = persistStore(store)

export default store;