import React from 'react';
import { connect } from 'react-redux';
import ProductLink from '../../components/ProductLink/ProductLink';
import * as cartSelectors from '../../modules/cart/cartSelectors';

const CartPage = ({ 
    items,
    totalPrice, 
}) => {
    return (
        <div>
            <h2>Cart list</h2>
            {items.map((item) => 
                <ProductLink 
                    key={item.id}
                    {...item} 
                />
            )}
            <div>
                Total price: {totalPrice}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    items: cartSelectors.getProducts(state),
    totalPrice: cartSelectors.getTotalPrice(state),
})

export default connect(mapStateToProps)(CartPage);