import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AdminNav.module.css'
import { routes } from '../../../routes'

const AdminNav = () => (
    <div className={s.AdminNav}>
        <NavLink 
            exact 
            to={routes.admin} 
            className={s.AdminNavLink} 
            activeClassName={s.AdminNavLinkActive}
        >
            Products
        </NavLink>
        <NavLink 
            to={routes.adminUsers} 
            className={s.AdminNavLink} 
            activeClassName={s.AdminNavLinkActive}
        >
            Users
        </NavLink>
    </div>
)

export default AdminNav;