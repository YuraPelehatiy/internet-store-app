import React from 'react';
import Modal from 'react-responsive-modal';
import s from './ModalRemoveProduct.module.css';
import ActionButton from '../ActionButton/ActionButton';

const ModalRemoveProductComponent = ({ 
    answer,
    showModal,
    onClose,
}) => (
    <Modal open={showModal} onClose={onClose}>
        <div className={s.form}>
            <h3>Are you sure?</h3>
            <div>
                <ActionButton onClick={() => answer(true)}>Yes</ActionButton>
                <ActionButton onClick={() => answer(false)}>No</ActionButton>
            </div>
        </div>
    </Modal>
);


export default ModalRemoveProductComponent;