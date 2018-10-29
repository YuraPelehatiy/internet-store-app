import React from 'react';
import { Link } from 'react-router-dom';
import { formatRoute } from 'react-router-named-routes';
import T from 'prop-types';
import { routes } from '../../routes';
import s from './ProductLink.module.css'

const ProductLink = ({ 
    title, 
    id, 
    image, 
    price 
}) => (
    <div className={s.ProductLink}>
        <Link to={formatRoute(routes.product, {id})}>
            <div>
                <img src={image} alt={title}/>
            </div>
            <div>
                Title: {title}
            </div>
            <div>
                Price: {price}
            </div>
        </Link>
    </div>
)

ProductLink.propTypes = {
    id: T.string.isRequired,
    title: T.string.isRequired,
    image: T.string.isRequired,
    price: T.number.isRequired
}

export default ProductLink;