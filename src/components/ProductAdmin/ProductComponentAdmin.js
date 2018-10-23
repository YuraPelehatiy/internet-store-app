import React from 'react';
import { productPropTypes } from '../../schemes/product';
import T from 'prop-types';

const ProductComponentAdmin = ({ id, title, description, image, price, onSubmitUpdate, onChangeField, handleOnRemove }) => (
    <form onSubmit = {onSubmitUpdate}>
        <div>
            <input type="text" name="title" value={title} onChange={onChangeField('title')}/>
        </div>
        <div>
            <textarea type="text" name="description" value={description} onChange={onChangeField('description')}/>
        </div>
        <div>
            <img src={image} alt={title}/>
        </div>
        <div>
            <input type="text" name="image" value={image} onChange={onChangeField('image')}/>
        </div>
        <div>
            <input type="number" name="price" value={price} onChange={onChangeField('price')}/>
        </div>
        <div>
            <button type="submit">Update</button>
        </div>
        <div>
            <button onClick = {() => handleOnRemove(id)}>Remove</button>
        </div>
    </form>
);

ProductComponentAdmin.propTypes = {
    ...productPropTypes,
    onChangeField: T.func.isRequired,
    onSubmitUpdate: T.func.isRequired,
    handleOnRemove: T.func.isRequired
};

export default ProductComponentAdmin;