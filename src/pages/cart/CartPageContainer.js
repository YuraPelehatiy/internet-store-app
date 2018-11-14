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
        props => (props.isLoading || props.items.some(item => item === undefined)),
        renderComponent(Loader),
        branch(
            props => props.isError,
            renderComponent(
                <>
                    <h1>Error...</h1>
                </>
            ),
        )
    ),
    mapProps(props => ({
        renderProductLink: (item, index) => (
            <ProductLink 
                key={item.id + index} 
                id={item.id} 
                title={item.title}
                image={item.image}
                price={item.price}
                onActionButtonClick={props.removeItemFromCart}
                actionButtonTitle="Remove from Cart"
            />
        ),
        items: props.items,
        countTotalPrice: props.countTotalPrice,
    }))
)(CartPageComponent);