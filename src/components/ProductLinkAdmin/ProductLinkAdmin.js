import React from 'react';
import { Link } from 'react-router-dom';
import { formatRoute } from 'react-router-named-routes';
import T from 'prop-types';
import { routes } from '../../routes';

const ProductLinkAdmin = ({ 
    title, 
    id,
    updateProductModal,
    removeProduct 
}) => (
    <div>
        <Link to={formatRoute(routes.adminProduct, {id})} >
            {title}
            <button onClick={(e) => updateProductModal(id, e)}>Edit</button>
            <button onClick={(e) => removeProduct(id, e)}>Remove</button>
        </Link>
    </div>
)

ProductLinkAdmin.propTypes = {
    id: T.string.isRequired,
    title: T.string.isRequired
}

export default ProductLinkAdmin;