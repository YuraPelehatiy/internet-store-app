import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from '../../routes.js';
import s from './Header.module.css';
import * as appOperations from '../../modules/app/appOperations';

const Header = ({ 
    cartItemsCount, 
    user, 
    logout 
}) => (
    <div className={s.header}>
        <div className={s.detailsPart}>
           <ul className={s.detailsLinks}>
               <li className={s.detailsLinksItem}>
                   <Link to={routes.about}>About Us</Link>
               </li>
               <li className={s.detailsLinksItem}>
                   <Link to={routes.contact}>Contact</Link>
               </li>
               <li className={s.detailsLinksItem}>
                   <Link to={routes.privacypolicy}>Privacy Policy</Link>
               </li>
               <li className={s.detailsLinksItem}>
                   <Link to={routes.termsandconditions}>Terms and Conditions</Link>
               </li>
               {user && user.id !== undefined && <li className={s.detailsLinksItem}>{user.firstName + " " + user.lastName}</li>}
               <li className={s.detailsLinksItem}>
                    {user && user.id !== undefined && <button onClick={logout} className={s.loginButton}>Logout</button>}
                    {user && user.id === undefined && <Link to={routes.authLogin}><button className={s.loginButton}>Login/Register</button></Link>}
               </li>
           </ul>
        </div>
        <div className={s.headerMain}>
            <div className={s.logo}>
                <Link to={routes.home}>Internet Store</Link>
            </div>
            <div className={s.searchBox}>
                <form>
                    <input className={s.inputField} type="text" placeholder="what are you looking for..."/>
                </form>
            </div>
            <div>
                <Link to={{ pathname: routes.cart, state: {modal: true} }}>
                    Cart ({cartItemsCount})
                </Link>
            </div>
        </div>
    </div>
);

const mapStateToProps = state => ({
    cartItemsCount: state.cart.items.length,
    user: state.app.user,
});

const mapStateToDispatch = {
    logout: appOperations.logout,
}

export default connect(mapStateToProps, mapStateToDispatch)(Header);