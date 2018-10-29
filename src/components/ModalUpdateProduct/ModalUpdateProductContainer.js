import React from 'react';
import ModalUpdateProductComponent from './ModalUpdateProductComponent';
import { productPropTypes } from '../../schemes/product';
import T from 'prop-types'
import * as Api from '../../api/Api';

class ModalUpdateProductContainer extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            title: '',
            description: '',
            image: '',
            price: '',
            openModal: false
        };

        this.onSubmitUpdate = this.onSubmitUpdate.bind(this);
        this.onChangeField = this.onChangeField.bind(this);
        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
    }

    async onSubmitUpdate(e){
        e.preventDefault();
        let newProduct = {
            title: this.state.title,
            description: this.state.description,
            image: this.state.image,
            price: this.state.price
        }
        await ModalUpdateProductContainer.updateDataById( newProduct);
        this.onCloseModal();
    }

    onChangeField(name){ 
        return (e) => {
            this.setState({
                [name]: e.target.value
            });
        }
    }

    onOpenModal(){
        this.setState({ openModal: true })
    }

    onCloseModal(){
        this.setState({ openModal: false })
    }

    render(){
        return(
            <ModalUpdateProductComponent 
                {...this.state} 
                onChangeField = {this.onChangeField}
                onSubmitAdd = {this.onSubmitAdd}
                onClose = {this.onCloseModal}
                onOpen = {this.onOpenModal}
                openModal = {this.state.openModal}
            />          
        );
    }
}

ModalUpdateProductContainer.updateDataById = (id) => Promise.all([
    Api.AdminProducts.updateProductById(id)
]); 

ModalUpdateProductContainer.propTypes = {
    //productList: T.arrayOf(productPropTypes),
    //addProduct: T.func.isRequired
};

export default ModalUpdateProductContainer;