import React from 'react';
import ModalAddProductComponent from './ModalAddProductComponent';
import { productPropTypes } from '../../schemes/product';
import T from 'prop-types'

class ModalAddProductContainer extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            title: '',
            description: '',
            image: '',
            price: ''
        };

        this.onSubmitAdd = this.onSubmitAdd.bind(this);
        this.onChangeField = this.onChangeField.bind(this);
    }

    onSubmitAdd(e){
        e.preventDefault();
        this.props.addProduct(this.state);
        this.props.onCloseModal()    
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
            <ModalAddProductComponent 
                {...this.state} 
                onChangeField = {this.onChangeField}
                onSubmitAdd = {this.onSubmitAdd}
                onClose = {this.props.onCloseModal}
                showModalStatus = {this.props.showModalStatus}
            />          
        );
    }
} 

ModalAddProductContainer.propTypes = {
    productList: T.arrayOf(productPropTypes),
};

export default ModalAddProductContainer;