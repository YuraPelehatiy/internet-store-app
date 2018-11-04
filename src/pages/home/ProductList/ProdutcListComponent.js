import React from 'react';
import ProductLink from '../../../components/ProductLink/ProductLink';
import s from './ProductList.module.css';

const ProdutcListComponent = ({
    products,
    addItemToCart,
}) => (
    <div className={s.ProductList}>
        {products.map(({id, title, image, price}) => (
                <ProductLink 
                    key={id} 
                    id={id} 
                    title={title}
                    image={image}
                    price={price}
                    addItemToCart={addItemToCart}
                />
            )
        )}
    </div>
)

export default ProdutcListComponent;