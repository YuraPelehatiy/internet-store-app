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
                renderProductLink(item)
            )}
            <div>
                Total price: {totalPrice}
            </div>
        </div>
    );
}

const renderProductLink = (item, index) => (
    <ProductLink 
        key={item.id} 
        id={item.id} 
        title={item.title}
        image={item.image}
        price={item.price}
        onActionButtonClick={() => {}}
        actionButtonTitle="Remove from Cart"
    />
)

const mapStateToProps = (state) => ({
    items: cartSelectors.getProducts(state),
    totalPrice: cartSelectors.getTotalPrice(state),
})

export default connect(mapStateToProps)(CartPage);