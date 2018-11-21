import React from 'react';
import s from './CartPage.module.css'
import ActionButton from '../../components/ActionButton/ActionButton';
import CartList from './CartList/CartList';

const CartPageComponent = ({
    products, 
    renderProductLink,
    countTotalPrice,
    itemsCart,
}) => (
    <div className = {s.CartPage}>
        <h2 className={s.CartPageTop}>Cart list</h2>
        <hr/>
        <CartList 
            products={products} 
            renderProductLink={renderProductLink} 
            itemsCart={itemsCart}
        />
        <hr/>
        <div className={s.CartPageBottom}>
            <div className={s.CartPageTotalPrice}>
                Total Price: {countTotalPrice}
            </div>
            <ActionButton>Checkout</ActionButton>
        </div>
        
    </div>
);

export default CartPageComponent;