import React from 'react';
import { Link } from 'react-router-dom';
import s from './Footer.module.css';
import { routes } from '../../routes';


const Footer = () => (
    <div className={s.Footer}>
        <div className={s.FooterMain}>
            <ul className={s.FooterLinks}>
                <h4>Store information</h4>
                <li className={s.FooterLinkItem}>
                    <Link to={routes.about}>About Us</Link>
                </li>
                <li className={s.FooterLinkItem}>
                    <Link to={routes.contact}>Contact</Link>
                </li>
                <li className={s.FooterLinkItem}>
                    <Link to={routes.privacypolicy}>Privacy Policy</Link>
                </li>
                <li className={s.FooterLinkItem}>
                    <Link to={routes.termsandconditions}>Terms and Conditions</Link>
                </li>
            </ul>
        </div>
        <h3 className={s.FooterS}>Internet Store 2018</h3>
    </div>
);

export default Footer;