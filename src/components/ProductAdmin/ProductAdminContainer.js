import React from 'react';
import ProductAdminComponent from './ProductAdminComponent';
/* import { productPropTypes } from '../../schemes/product';
import T from 'prop-types';
import { routes } from '../../routes'; */
import * as Api from '../../api/Api';
class ProductAdminContainer extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            loading: true
        };

        this.onSubmitUpdate = this.onSubmitUpdate.bind(this);
        this.onChangeField = this.onChangeField.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
    }

    onChangeField(name){ 
        return (e) => {
            this.setState({
                [name]: e.target.value
            });
        }
    }

    async onSubmitUpdate(e){
        e.preventDefault();
        const { id, title, description, image, price, } = this.state;
        
        await ProductAdminContainer.updateDataById(id, {title, description, image, price,});
        this.props.history.go(-1);
    }
    
    async removeProduct(){
        const { id } = this.state;
        await ProductAdminContainer.removeDataById(id);
    }

    async componentDidMount(){
        let [productData]  = await ProductAdminContainer.getDataById(this.props.match.params.id);
        let product = productData.data[0];
        
        const {id, title, description, image, price } = product;

        this.setState({ id, title, description, image, price, loading: false });
    }

    render(){
        if(this.state.loading){
            return <h1>Loading...</h1>
        }

        return(
            <ProductAdminComponent 
                {...this.state} 
                onSubmitUpdate={this.onSubmitUpdate} 
                handleOnRemove={this.removeProduct}
                onChangeField={this.onChangeField}
            />
        );
    }
}

ProductAdminContainer.getDataById = (id) => Promise.all([
    Api.AdminProducts.getProductsById(id)
]);

ProductAdminContainer.updateDataById = (id, product) => Promise.all([
    Api.AdminProducts.updateProductById(id, product)
]);

ProductAdminContainer.removeDataById = (id) => Promise.all([
    Api.AdminProducts.removeProductById(id)
]);

ProductAdminContainer.propTypes = {
    //productList: T.arrayOf(productPropTypes),
    //updateProduct: T.func.isRequired,
    //removeProduct: T.func.isRequired,
};

export default ProductAdminContainer;