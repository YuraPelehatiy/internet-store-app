import React from 'react';
import {
    NavLink, Link, Route, Switch,
} from 'react-router-dom';
import { routes } from '../../routes';
import s from './AuthPage.module.css';
import LoginPage from './Login/LoginPage';
import RegisterPage from './Register/RegisterPage';
import RememberPage from './Remember/RememberPage';

const AuthPage = () => (
    <div className={s.AuthPage}>
        <div className={s.Logo}>
            <Link to={routes.home}>Internet Store</Link>
        </div>
        <div className={s.AuthForm}>
            <ul className={s.AuthFormNav}>
                <li className={s.AuthFormNavItem}>
                    <NavLink
                        to={routes.authLogin}
                        className={s.AuthFormLink}
                        activeClassName={s.AuthFormActiveLink}
                    >
                        Login
                    </NavLink>
                </li>
                <li className={s.AuthFormNavItem}>
                    <NavLink
                        to={routes.authRegister}
                        className={s.AuthFormLink}
                        activeClassName={s.AuthFormActiveLink}
                    >
                        Register
                    </NavLink>
                </li>
            </ul>
            <Switch>
                <Route path={routes.authLogin} component={LoginPage} />
                <Route path={routes.authRegister} component={RegisterPage} />
                <Route path={routes.authRemember} component={RememberPage} />
            </Switch>
            <div>
                <Link to={routes.authRemember}>Forgot password?</Link>
            </div>
        </div>
    </div>
);

export default AuthPage;