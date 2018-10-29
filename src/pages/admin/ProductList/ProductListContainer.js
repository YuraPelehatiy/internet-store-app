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
        let [ productsData ] = await ProductListContainer.fetchData();

        this.setState({ 
            products: productsData.data, 
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

ProductListContainer.fetchData = () => Promise.all([
    Api.AdminProducts.fetchProducts(),
])

export default ProductListContainer;