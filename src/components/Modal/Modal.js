import React from 'react';
import Modal from 'react-responsive-modal';
import s from './Modal.module.css'

const UniversalModal = ({ 
    open,
    onClose,
    children
}) => (
    <Modal open={open} onClose={onClose}>
        <div className={s.Modal}> 
            {children}
        </div>
    </Modal>
);

export default UniversalModal;