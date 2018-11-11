import React from 'react';
import { productPropTypes } from '../../schemes/product';
import T from 'prop-types';
import Modal from 'react-responsive-modal';
import s from './ModalAddProduct.module.css';

const ModalAddProductComponent = ({ 
    title, 
    description, 
    image, 
    price, 
    onSubmitAdd, 
    onChangeField, 
    openModal, 
    onClose, 
    onOpen 
}) => (
    <>
        <button onClick={onOpen} className={s.AddButton}>Add new product</button>
        <Modal open={openModal} onClose={onClose} center>
            <form onSubmit = {onSubmitAdd} className={s.form}>
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
                    <button type="submit">Add</button>
                </div>
            </form>
        </Modal>
    </>
);

ModalAddProductComponent.propTypes = {
    ...productPropTypes,
    onChangeField: T.func.isRequired,
    onSubmitAdd: T.func.isRequired,
    openModal: T.bool.isRequired,
    onOpen: T.func.isRequired,
    onClose: T.func.isRequired
}

export default ModalAddProductComponent;