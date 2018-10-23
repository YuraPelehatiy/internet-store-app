import React from 'react';
import ProductComponent from './ProductComponent';
import { productPropTypes } from '../../schemes/product';
import T from 'prop-types';

const ProductContainer = ({ match: { params }, productList  }) => {
    const product = productList.find(({id}) => id === Number(params.id));
    return(
        <ProductComponent 
            {...product} 
        />
    );
}

ProductContainer.propTypes = {
    productList: T.arrayOf(productPropTypes),
};

export default ProductContainer;