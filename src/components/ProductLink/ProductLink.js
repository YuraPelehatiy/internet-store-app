import React from 'react';
import { Link } from 'react-router-dom';
import { formatRoute } from 'react-router-named-routes';
import T from 'prop-types';
import { routes } from '../../routes';

const ProductLink = ({ title, id }) => (
    <div>
        <Link to={formatRoute(routes.adminProduct, {id})} >{title}</Link>
    </div>
)

ProductLink.propTypes = {
    id: T.number.isRequired,
    title: T.string.isRequired
}

export default ProductLink;