import React from 'react';
import { productPropTypes } from '../../schemes/product';
import T from 'prop-types';
import Modal from 'react-responsive-modal';
import s from './ModalUpdateProduct.module.css';

const ModalUpdateProductComponent = ({ 
    title,
    description,
    image,
    price,
    onSubmitUpdate,
    showModal,
    afterOpenModal,
    onChangeField,
    onClose,
}) => (
    <Modal open={showModal} onEntered={afterOpenModal} onClose={onClose}>
        <form onSubmit = {onSubmitUpdate} className={s.form}>
            <div>
                <input type="text" name="title" value={title} onChange={onChangeField('title')}  required placeholder="title"/>
            </div>
            <div>
                <textarea type="text" name="description" value={description} onChange={onChangeField('description')} required placeholder="description"/>
            </div>
            <div>
                <img src={image} alt={title}/>
            </div>
            <div>
                <input type="text" name="image" value={image} onChange={onChangeField('image')} required placeholder = "image url"/>
            </div>
            <div>
                <input type="number" name="price" value={price} onChange={onChangeField('price')} required placeholder = "price"/>
            </div>
            <div>
                <button type="submit">Update</button>
            </div>
        </form>
    </Modal>
);

ModalUpdateProductComponent.propTypes = {
    ...productPropTypes,
    onChangeField: T.func.isRequired,
    showModal: T.bool.isRequired,
    onClose: T.func.isRequired
}

export default ModalUpdateProductComponent;