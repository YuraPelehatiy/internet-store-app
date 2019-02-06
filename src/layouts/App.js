import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../routes';
import Desktop from './Desktop';
import AuthPage from '../pages/Auth/AuthPage';


const App = () => (
    <Switch>
        <Route path={routes.authLogin} component={AuthPage} />
        <Route path={routes.authRegister} component={AuthPage} />
        <Route path={routes.authRemember} component={AuthPage} />
        <Route component={Desktop} />
    </Switch>
);


export default App;