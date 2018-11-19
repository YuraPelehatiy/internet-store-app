import React from 'react';
import s from './ProductPage.module.css';
import ActionButton from '../../components/ActionButton/ActionButton';
import Counter from '../../components/Counter/Counter';

const ProductPageComponent = ({ 
    id,
    title, 
    description, 
    image, 
    price ,
    addItemToCart,
    count,
    increment,
    decrement,
    onEnterValueCounter
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
            <Counter 
                value={count} 
                increment={increment} 
                decrement={decrement} 
                onEnterValue={onEnterValueCounter}
                id={id} 
                horizontalStyle
            />
            <ActionButton onClick={() => addItemToCart({id, value: count})}>Add to cart</ActionButton>
        </div>
        
    </div>
)

export default ProductPageComponent;