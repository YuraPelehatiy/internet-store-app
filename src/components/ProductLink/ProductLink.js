import React from 'react';
import { Link } from 'react-router-dom';
import { formatRoute } from 'react-router-named-routes';
import T from 'prop-types';
import { routes } from '../../routes';
import s from './ProductLink.module.css'
import ActionButton from '../ActionButton/ActionButton';
import Counter from '../Counter/Counter';

const ProductLink = ({ 
    title, 
    id, 
    image, 
    price,
    onActionButtonClick,
    actionButtonTitle,
    cart,
    count,
    increment,
    decrement, 
}) => (
    <div className={s.ProductLink}>
        {cart && <Counter 
                    value={count} 
                    increment={increment} 
                    decrement={decrement} 
                    id={id}
                />
        }
        <Link to={formatRoute(routes.product, {id})} className={s.linkAnchor}>
            <div>
                <img src={image} alt={title} className={s.productImage} title={title}/>
            </div>
            <h3 className={s.productTitle}>
                {title}
            </h3>
            <div className={s.price}>
                {price} y.e
            </div>
        </Link>
        <ActionButton onClick={() => onActionButtonClick({id})}>{actionButtonTitle}</ActionButton>
    </div>
)

ProductLink.propTypes = {
    id: T.string.isRequired,
    title: T.string.isRequired,
    image: T.string.isRequired,
    price: T.number.isRequired
}

export default ProductLink;