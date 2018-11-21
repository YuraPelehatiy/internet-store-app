import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { compose, lifecycle } from 'recompose';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './layouts/App';
import { store, persistor } from './store/store';
import * as appOperations from './modules/app/appOperations';
import Loader from './components/Loader/Loader';

const InitAppComponent = () => (
    <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor} >
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </PersistGate>
    </Provider>
);

const InitApp = compose(
    lifecycle({
        componentDidMount(){
            store.dispatch(appOperations.init());
        }
    }),
)(InitAppComponent);

ReactDOM.render(
    <InitApp />, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
