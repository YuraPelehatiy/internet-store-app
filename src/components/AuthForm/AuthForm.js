import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes'
import s from './AuthForm.module.css'

const AuthForm = (props) => (
    <div className={s.AuthForm}>
        <ul className={s.AuthFormNav}>
            <li className={s.AuthFormNavItem}>
                <NavLink to={routes.authLogin} className={s.AuthFormLink} activeClassName={s.AuthFormActiveLink}>Login</NavLink>
            </li>
            <li className={s.AuthFormNavItem}>
                <NavLink to={routes.authRegister} className={s.AuthFormLink} activeClassName={s.AuthFormActiveLink}>Register</NavLink>
            </li>
        </ul>
        {props.children}
    </div>
);

export default AuthForm;