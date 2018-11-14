import React from 'react';
import { Link } from 'react-router-dom';
import { formatRoute } from 'react-router-named-routes';
import T from 'prop-types';
import { routes } from '../../routes';
import s from './ProductLinkAdmin.module.css';

const ProductLinkAdmin = ({ 
    title, 
    id,
    showModalToUpdateProduct,
    showModalToRemoveProduct
}) => (
    <div className={s.ProductLinkAdmin}>
        <Link to={formatRoute(routes.adminProduct, {id})} >
            {title}
        </Link>
        <div className={s.ProductLinkAdminButtons}>
            <button className={s.ActionButtonAdmin} onClick={() => showModalToUpdateProduct(id)}>Edit</button>
            <button className={s.ActionButtonAdmin} onClick={() => showModalToRemoveProduct(id)}>Remove</button>
        </div>
    </div>
)

ProductLinkAdmin.propTypes = {
    id: T.string.isRequired,
    title: T.string.isRequired
}

export default ProductLinkAdmin;