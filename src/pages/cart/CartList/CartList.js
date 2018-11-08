import React from 'react';
import s from './CartList.module.css'

const CartListContainer = ({
    items, 
    renderProductLink,
    countTotalPrice
}) => (
    <div className = {s.CartList}>
        <h2>Cart list</h2>
        <hr/>
        {items.map((item, index)=> 
            renderProductLink(item, index)
        )}
        <hr/>
        <div>
            Total Price: {countTotalPrice}
        </div>
    </div>
);

export default CartListContainer;