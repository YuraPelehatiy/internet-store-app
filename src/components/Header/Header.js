import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from '../../routes.js';
import s from './Header.module.css';
import * as appOperations from '../../modules/app/appOperations';
import * as cartSelectors from '../../modules/cart/cartSelectors';
import ActionButton from '../ActionButton/ActionButton.js';
import SearchForm from '../SearchForm/SearchForm';

const Header = ({ 
    cartItemsCount, 
    user, 
    logout 
}) => (
    <div className={s.Header}>
        <div className={s.HeaderTop}>
           <ul className={s.HeaderLinks}>
               <li className={s.HeaderLinkItem}>
                   <Link to={routes.about}>About Us</Link>
               </li>
               <li className={s.HeaderLinkItem}>
                   <Link to={routes.contact}>Contact</Link>
               </li>
               <li className={s.HeaderLinkItem}>
                   <Link to={routes.privacypolicy}>Privacy Policy</Link>
               </li>
               <li className={s.HeaderLinkItem}>
                   <Link to={routes.termsandconditions}>Terms and Conditions</Link>
               </li>
               {user 
                && user.id !== undefined 
                && <li className={s.HeaderLinkItem}>
                        <Link to={routes.user}>
                            User: {user.firstName + " " + user.lastName}
                        </Link>
                    </li>}
               <li className={s.HeaderLinkItem}>
                    {user && user.id !== undefined 
                        ? <ActionButton onClick={logout} smallSize>Logout</ActionButton>
                        : <Link to={routes.authLogin}><ActionButton smallSize>Login/Register</ActionButton></Link>}
               </li>
           </ul>
        </div>
        <div className={s.HeaderMain}>
            <div className={s.Logo}>
                <Link to={routes.home}>Internet Store</Link>
            </div>
            <div className={s.SearchBox}>
                <SearchForm />
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
    user: state.app.user,
    cartItemsCount: cartSelectors.getCountItems(state),
});

const mapStateToDispatch = {
    logout: appOperations.logout,
}

export default connect(mapStateToProps, mapStateToDispatch)(Header);