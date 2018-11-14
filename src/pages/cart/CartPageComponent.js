import React from 'react';
import s from './CartPage.module.css'
import ActionButton from '../../components/ActionButton/ActionButton';

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
            <ActionButton>Checkout</ActionButton>
        </div>
        
    </div>
);

export default CartListContainer;