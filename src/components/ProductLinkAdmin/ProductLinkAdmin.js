import React from 'react';
import { Link } from 'react-router-dom';
import { formatRoute } from 'react-router-named-routes';
import T from 'prop-types';
import { routes } from '../../routes';
import s from './ProductLinkAdmin.module.css';
import ActionButton from '../ActionButton/ActionButton';

const ProductLinkAdmin = ({  
    id,
    title,
    showModalToUpdateProduct,
    showModalToRemoveProduct,
    users,
}) => (
    <div className={s.ProductLinkAdmin}>
        <Link to={formatRoute((users && routes.adminUser) || routes.adminProduct, {id})} >
            {title}
        </Link>
        <div className={s.ProductLinkAdminButtons}>
            <ActionButton mediumSize onClick={() => showModalToUpdateProduct(id)}>Edit</ActionButton>
            <ActionButton mediumSize onClick={() => showModalToRemoveProduct(id)}>Remove</ActionButton>
        </div>
    </div>
)

ProductLinkAdmin.propTypes = {
    id: T.string.isRequired,
    title: T.string.isRequired
}

export default ProductLinkAdmin;