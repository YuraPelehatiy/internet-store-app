import React from 'react';
import ProductComponent from './ProductComponent';
import { productPropTypes } from '../../schemes/product';
import T from 'prop-types';
import * as Api from '../../api/Api';

class ProductContainer extends React.Component {
    constructor(){
        super();

        this.state = {
            loading: true
        }
    }

    async componentDidMount(){
        let [productData]  = await ProductContainer.getDataById(this.props.match.params.id);
        let product = productData.data[0];
        
        const {id, title, description, image, price } = product;

        this.setState({ id, title, description, image, price, loading: false });
    }

    render(){
        if(this.state.loading){
            return <h1>Loading...</h1>
        }


        return(
            <ProductComponent
                {...this.state}
            />
        )
    }
}

ProductContainer.getDataById = (id) => Promise.all([
    Api.UserProducts.getProductsById(id)
])

ProductContainer.propTypes = {
    productList: T.arrayOf(productPropTypes),
};

export default ProductContainer;