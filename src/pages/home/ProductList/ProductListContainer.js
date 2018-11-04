import React from 'react';
import { connect } from 'react-redux';
import * as productsOperations from '../../../modules/products/productsOperations';
import * as productsSelectors from '../../../modules/products/productsSelectors';
import * as cartActions from '../../../modules/cart/cartActions';
import ProdutcListComponent from './ProdutcListComponent';

class ProductListContainer extends React.Component {
    componentDidMount(){
        this.props.fetchProducts()
    }

    render(){
        if(this.props.isLoading){
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

        return(
            <ProdutcListComponent
                products={this.props.products}
                addItemToCart={this.props.addItemToCart}
            />
        );
    }
}

const mapStateToProps = state => ({
    products: productsSelectors.getProducst(state),
    isLoading: state.products.isLoading,
    isError: !!state.products.error,
    error: !!state.products.error,
});

const mapStateToDispatch = {
    fetchProducts: productsOperations.fetchProducts,
    addItemToCart: cartActions.add,
}

export default connect(
    mapStateToProps, 
    mapStateToDispatch,
)(ProductListContainer);