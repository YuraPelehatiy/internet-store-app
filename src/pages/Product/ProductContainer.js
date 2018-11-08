import React from 'react';
import { connect } from 'react-redux';
import * as productsSelectors from './../../modules/products/productsSelectors';
import ProductComponent from './ProductComponent';

const ProductContainer = ({ product }) => {
    if(!product){
        return null;
    }

    return (
        <ProductComponent
            {...product}
        />
    );
} 

const mapStateToProps = (state, props) => ({
    product: productsSelectors.getProduct(state, props.match.params.id)
})

export default connect(mapStateToProps)(ProductContainer);