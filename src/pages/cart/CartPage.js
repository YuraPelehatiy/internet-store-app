import React from 'react';
import { connect } from 'react-redux';
import ProductLink from '../../components/ProductLink/ProductLink';
import CartList from './CartList/CartList';
import * as cartSelectors from '../../modules/cart/cartSelectors';
import * as cartActions from '../../modules/cart/cartActions';
import * as cartOperation from '../../modules/cart/cartOperation';

class CartPage extends React.Component {
    componentDidMount(){
        this.props.fetchProducts()
    }

    renderProductLink = (item, index) => (
        <ProductLink 
            key={item.id + index} 
            id={item.id} 
            title={item.title}
            image={item.image}
            price={item.price}
            onActionButtonClick={this.props.removeItemFromCart}
            actionButtonTitle="Remove from Cart"
        />
    );

    render(){
        
        if(this.props.isLoading || this.props.items.some(item => item === undefined)){
            return <h1>Loading...</h1>
        }

        if(this.props.isError){
            return (
                <>
                    <h1>Error...</h1>
                    <p>{this.props.error}</p>
                </>
            )
        }

        return (
            <CartList 
                items={this.props.items}
                renderProductLink={this.renderProductLink}
                countTotalPrice={this.props.countTotalPrice}
            />
        );
    }
}



const mapStateToProps = (state) => ({
    itemsIds: state.cart.items,
    items: cartSelectors.getProducts(state, state.cart.isLoading),
    countTotalPrice: cartSelectors.getTotalPrice(state, state.cart.isLoading ),
    products: state.entities.products,
    isLoading: state.cart.isLoading,
    isError: !!state.cart.error,
    error: state.cart.error,
});

const mapStateToDispatch = {
    removeItemFromCart: cartActions.remove,
    fetchProducts: cartOperation.fetchProducts,
};

export default connect(
    mapStateToProps, 
    mapStateToDispatch
)(CartPage);