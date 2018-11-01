import React from 'react';
import ModalUpdateProductComponent from './ModalUpdateProductComponent';

class ModalUpdateProductContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            description: '',
            image: '',
            price: '',
        };

        this.onSubmitUpdate = this.onSubmitUpdate.bind(this);
        this.onChangeField = this.onChangeField.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
    }

    async onSubmitUpdate(e){
        e.preventDefault();
        let product = {
            title: this.state.title,
            description: this.state.description,
            image: this.state.image,
            price: this.state.price,
        }
        let id = this.state.id

        this.props.updateProduct(id, product);
        this.props.onCloseModal();
    }

    afterOpenModal(){
        const {  id, title, description, image, price, } = this.props.productToEdit
        this.setState({  id, title, description, image, price, });
    }

    onChangeField(name){ 
        return (e) => {
            this.setState({
                [name]: e.target.value
            });
        }
    }

    render(){
        return(
            <ModalUpdateProductComponent 
                {...this.state} 
                onChangeField = {this.onChangeField}
                onSubmitUpdate = {this.onSubmitUpdate}
                onClose = {this.props.onCloseModal}
                showModal = {this.props.showModal}
                afterOpenModal={this.afterOpenModal}
            />          
        );
    }
}

export default ModalUpdateProductContainer;