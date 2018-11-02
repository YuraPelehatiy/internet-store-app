import React from 'react';
import ModalRemoveProductComponent from './ModalRemoveProductComponent';

const ModalRemoveProductContainer = (props) => (
    <ModalRemoveProductComponent 
        answer = {props.handleAnswerToRemoveProduct}
        onClose = {props.onCloseModal}
        showModal = {props.showModal}
    />          
);

export default ModalRemoveProductContainer;