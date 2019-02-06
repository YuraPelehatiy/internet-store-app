import React from 'react';
import { connect } from 'react-redux';
import {
    compose, branch, renderComponent, mapProps,
} from 'recompose';
import * as productsSelectors from '../../../modules/products/productsSelectors';
import * as cartActions from '../../../modules/cart/cartActions';
import ProdutcListComponent from './ProdutcListComponent';
import ProductLink from '../../../components/ProductLink/ProductLink';
import Loader from '../../../components/Loader/Loader';
import ErrorLoadign from '../../../components/ErrorLoading/ErrorLoading';

const mapStateToProps = state => ({
    products: productsSelectors.getProducst(state),
    isLoading: state.products.isLoading,
    isError: !!state.products.error,
    error: state.products.error,
});

const mapStateToDispatch = {
    addItemToCart: cartActions.add,
};

export default compose(
    connect(
        mapStateToProps,
        mapStateToDispatch,
    ),
    branch(
        props => props.isLoading,
        renderComponent(Loader),
        branch(
            props => props.isError,
            renderComponent(ErrorLoadign),
        ),
    ),
    mapProps(props => ({
        renderProductLink: item => (
            <ProductLink
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                onActionButtonClick={props.addItemToCart}
                actionButtonTitle="Add to Cart"
            />
        ),
        products: props.products,
    })),
)(ProdutcListComponent);