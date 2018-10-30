import React from 'react';
import ProductAdminComponent from './ProductAdminComponent';
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
        
        await Api.AdminProducts.updateProductById(id, {title, description, image, price,});
        this.props.history.go(-1);
    }
    
    async removeProduct(){
        const { id } = this.state;
        await Api.AdminProducts.removeProductById(id);
    }

    async componentDidMount(){
        let productData  = await Api.AdminProducts.getProductsById(this.props.match.params.id);
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
            <ProductAdminComponent 
                {...this.state} 
                onSubmitUpdate={this.onSubmitUpdate} 
                handleOnRemove={this.removeProduct}
                onChangeField={this.onChangeField}
            />
        );
    }
}

export default ProductAdminContainer;