import React from 'react';
import ModalRemoveProductComponent from './ModalRemoveProductComponent';

class ModalRemoveProductContainer extends React.Component {
    render(){
        return(
            <ModalRemoveProductComponent 
                answer = {this.props.handleAnswerToRemoveProduct}
                onClose = {this.props.onCloseModal}
                showModal = {this.props.showModal}
            />          
        );
    }
}

export default ModalRemoveProductContainer;