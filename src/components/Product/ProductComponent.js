import React from 'react';
import { productPropTypes } from '../../schemes/product';

const ProductComponent = ({ id, title, description, image, price }) => (
    <div>
        <div>
            Title: {title}
        </div>
        <div>
            <img src={image} alt={title}/>
        </div>
        <div>
            Description: {description}
        </div>
        <div>
            Price: {price}
        </div>
    </div>
)

ProductComponent.propTypes = productPropTypes;

export default ProductComponent;