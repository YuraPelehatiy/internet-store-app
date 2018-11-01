import React from 'react';
import ProdutcListAdminComponent from './ProdutcListAdminComponent';
import * as Api from '../../../api/Api';

class ProductListAdminContainer extends React.Component {
    constructor(){
        super();
    
        this.state = {
          products: [],
          loading: true,
          showModalUpdate: false,
          showModalRemove: false,
          productToEdit: {},
          productIdToRemove: ''
        };

        this.showModalToUpdateProduct = this.showModalToUpdateProduct.bind(this);
        this.showModalToRemoveProduct = this.showModalToRemoveProduct.bind(this);
        this.closeModalToUpdateProduct = this.closeModalToUpdateProduct.bind(this);
        this.closeModalToRemoveProduct = this.closeModalToRemoveProduct.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
        this.createProduct = this.createProduct.bind(this);
        this.handleAnswerToRemoveProduct = this.handleAnswerToRemoveProduct.bind(this);
    }

    async componentDidMount(){
        let productsData = await Api.AdminProducts.fetchProducts();
        let products = productsData.data;

        this.setState({ 
            products, 
            loading: false 
        });
    }

    showModalToUpdateProduct(id ,e){
        e.preventDefault();
        let index = this.state.products.findIndex(i => i.id === id);
        let productToEdit = this.state.products[index];

        this.setState({ 
            showModalUpdate: true,
            productToEdit
        });
    }

    showModalToRemoveProduct(id ,e){
        e.preventDefault();
        this.setState({ 
            productIdToRemove: id,
            showModalRemove: true,
        });
    }

    handleAnswerToRemoveProduct(isRemove){
        if(isRemove){
            this.removeProduct(this.state.productIdToRemove);
        }
        this.closeModalToRemoveProduct();
    }

    closeModalToUpdateProduct(){
        this.setState({ showModalUpdate: false });
    }

    closeModalToRemoveProduct(){
        this.setState({ showModalRemove: false });
    }

    async updateProduct(id, product){
        let res = await Api.AdminProducts.updateProductById(id, product);
        
        let index = this.state.products.findIndex(i => i.id === id);
        let products = [...this.state.products];

        products[index] = res.data[0];

        this.setState({
            products
        })
    }

    async removeProduct(id){
        let res = await Api.AdminProducts.removeProductById(id);

        if (res && res.data && res.data.success){
            let index = this.state.products.findIndex(i => i.id === id);
            
            let products = [...this.state.products];
            products.splice(index, 1);
            
            this.setState({
                products
            })
        }
    }

    async createProduct(product){
        let res = await Api.AdminProducts.createProduct(product);
        
        let products = [...this.state.products];
        products.push(res.data[0]);
        
        this.setState({
            products
        });
    }
    
    render(){
        if(this.state.loading){
            return <h1>Loading...</h1>
        }

        return(
            <ProdutcListAdminComponent
                {...this.props}
                {...this.state}
                updateProduct = {this.updateProduct}
                removeProduct = {this.removeProduct}
                createProduct = {this.createProduct}
                showModalToUpdateProduct = {this.showModalToUpdateProduct}
                showModalToRemoveProduct = {this.showModalToRemoveProduct}
                closeModalToUpdateProduct = {this.closeModalToUpdateProduct}
                closeModalToRemoveProduct = {this.closeModalToRemoveProduct}
                handleAnswerToRemoveProduct = {this.handleAnswerToRemoveProduct}
            />
        );
    }
}

export default ProductListAdminContainer;