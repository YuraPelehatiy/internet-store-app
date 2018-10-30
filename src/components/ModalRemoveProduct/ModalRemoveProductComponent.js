import React from 'react';
import Modal from 'react-responsive-modal';
import s from './ModalRemoveProduct.module.css';

const ModalRemoveProductComponent = ({ 
    answer,
    showModal,
    onClose,
}) => (
    <Modal open={showModal} onClose={onClose}>
        <div className={s.form}>
            <h3>Are you sure?</h3>
            <div>
                <button onClick={() => answer(true)}>Yes</button>
                <button onClick={() => answer(false)}>No</button>
            </div>
        </div>
    </Modal>
);


export default ModalRemoveProductComponent;