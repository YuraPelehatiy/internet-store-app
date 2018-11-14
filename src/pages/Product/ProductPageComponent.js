import React from 'react';
import s from './ProductPage.module.css';
import ActionButton from '../../components/ActionButton/ActionButton';
import { productPropTypes } from '../../schemes/product';

const ProductPageComponent = ({ 
    id,
    title, 
    description, 
    image, 
    price ,
    addItemToCart,
}) => (
    <div className={s.ProductPage}>
        <div className={s.imageContainer}>
            <img src={image} alt={title} className={s.image}/>
        </div>
        <div className={s.contentContainer}>
            <h2 className={s.title}>
                Title: {title}
            </h2>
            
            <p>
                Description: {description}
            </p>
            <h2>
                Price: {price}
            </h2>
            <ActionButton onClick={() => addItemToCart({id})}>Add to cart</ActionButton>
        </div>
        
    </div>
)

ProductPageComponent.propTypes = productPropTypes;

export default ProductPageComponent;