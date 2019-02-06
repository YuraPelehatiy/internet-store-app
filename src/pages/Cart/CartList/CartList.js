import React from 'react';
import s from './CartList.module.css';

const CartList = ({
    products,
    itemsCart,
    renderProductLink,
}) => {
    if (products.length === 0) {
        return (
            <h2 className={s.EmptyCart}>Your cart is empty</h2>
        );
    }

    return (
        <div className={s.CartList}>
            {products.map(item => renderProductLink(item, itemsCart))}
        </div>
    );
};

export default CartList;