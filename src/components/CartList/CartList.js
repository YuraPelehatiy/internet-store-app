import React from 'react';
import s from './CartList.module.css'

const CartListContainer = ({
    items, 
    renderProductLink
}) => (
    <div className = {s.CartList}>
        {items.map((item, index) => 
                renderProductLink(item, index)
        )}
    </div>
);

export default CartListContainer;