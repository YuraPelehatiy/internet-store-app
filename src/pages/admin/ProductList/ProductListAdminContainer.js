import React from 'react';
import { connect } from 'react-redux';
import ProdutcListAdminComponent from './ProdutcListAdminComponent';
import * as adminOperations from '../../../modules/admin/adminOperations';
import * as adminSelectors from '../../../modules/admin/adminSelectors';

class ProductListAdminContainer extends React.Component {
    constructor(){
        super();
    
        this.state = {
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

    componentDidMount(){
        this.props.fetchProducts();
    }

    showModalToUpdateProduct(id ,e){
        e.preventDefault();
        let index = this.props.products.findIndex(i => i.id === id);
        let productToEdit = this.props.products[index];

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

    updateProduct(id, product){
        this.props.updateProduct(id, product)
    }

    removeProduct(id){
        this.props.removeProduct(id)
    }

    createProduct(newProduct){
        this.props.createProduct(newProduct);
    }
    
    render(){
        if(this.props.isLoading){
            return <h1>Loading...</h1>
        }

        if(this.props.isError){
            return(
                <>
                    <h1>Error...</h1>
                    <p>{this.props.error}</p>
                </>
            );
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

const mapStateToProps = state => ({
    products: adminSelectors.getProducst(state),
    isLoading: state.admin.isLoading,
    isError: !!state.admin.error,
    error: state.admin.error,
});

const mapStateToDispatch = {
    fetchProducts: adminOperations.fetchProducts,
    createProduct: adminOperations.createProduct,
    updateProduct: adminOperations.updateProduct,
    removeProduct: adminOperations.removeProduct,
}


export default connect(
    mapStateToProps, 
    mapStateToDispatch,
)(ProductListAdminContainer);