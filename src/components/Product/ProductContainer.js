import React from 'react';
import ProductComponent from './ProductComponent';
import * as Api from '../../api/Api';

class ProductContainer extends React.Component {
    constructor(){
        super();

        this.state = {
            loading: true
        }
    }

    async componentDidMount(){
        let productData  = await Api.Products.getProductsById(this.props.match.params.id);
        let product = productData.data[0];

        this.setState({ 
            ...product,
            loading: false 
        });
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

export default ProductContainer;