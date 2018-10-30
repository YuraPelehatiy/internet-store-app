import React from 'react';
import ProdutcListComponent from './ProdutcListComponent';
import * as Api from '../../../api/Api';

class ProductListContainer extends React.Component {
    constructor(){
        super();
    
        this.state = {
          products: [],
          loading: true,
        };
    }

    async componentDidMount(){
        let { data: products } = await Api.Products.fetchProducts();

        this.setState({ 
            products, 
            loading: false 
        });
    }

    render(){
        if(this.state.loading){
            return <h1>Loading...</h1>
        }

        return(
            <ProdutcListComponent
                {...this.props}
                {...this.state}
            />
        );
    }
}

export default ProductListContainer;