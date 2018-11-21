import React from 'react';
import { connect } from 'react-redux';
import ProductLink from '../../components/ProductLink/ProductLink';
import CartPageComponent from './CartPageComponent';
import * as cartSelectors from '../../modules/cart/cartSelectors';
import * as cartActions from '../../modules/cart/cartActions';
import * as cartOperation from '../../modules/cart/cartOperation';
import { compose } from '../../../../../AppData/Local/Microsoft/TypeScript/3.0/node_modules/redux';
import { lifecycle, renderComponent, branch, mapProps } from 'recompose';
import Loader from '../../components/Loader/Loader';
import ErrorLoadign from '../../components/ErrorLoading/ErrorLoading';

const mapStateToProps = (state) => ({
    itemsCart: state.cart.items,
    products: cartSelectors.getProducts(state, state.cart.isLoading),
    countTotalPrice: cartSelectors.getTotalPrice(state, state.cart.isLoading),
    isLoading: state.cart.isLoading,
    isError: !!state.cart.error,
    error: state.cart.error,
});

const mapStateToDispatch = {
    removeItemFromCart: cartActions.remove,
    fetchProducts: cartOperation.fetchProducts,
    increase: cartActions.increase,
    decrease: cartActions.decrease,
    enterValue: cartActions.enterValue,
};

export default compose(
    connect(
        mapStateToProps, 
        mapStateToDispatch
    ),
    lifecycle({
        componentDidMount(){
            this.props.fetchProducts()
        }
    }),
    branch(
        props => (props.isLoading),
        renderComponent(Loader),
        branch(
            props => props.isError,
            renderComponent(ErrorLoadign),
        )
    ),
    mapProps(props => ({
        renderProductLink: (item, itemsCart) => (
            <ProductLink 
                cart
                count={itemsCart[item.id].count}
                key={item.id} 
                id={item.id} 
                title={item.title}
                image={item.image}
                price={item.price}
                onActionButtonClick={props.removeItemFromCart}
                increment={props.increase}
                decrement={props.decrease}
                onEnterValueCounter={props.enterValue}
                actionButtonTitle="Remove from Cart"
            />
        ),
        products: props.products,
        itemsCart: props.itemsCart,
        countTotalPrice: props.countTotalPrice,
    }))
)(CartPageComponent);