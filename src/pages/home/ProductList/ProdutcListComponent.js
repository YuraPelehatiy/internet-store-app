import React from 'react';
import s from './ProductList.module.css';

const ProdutcListComponent = ({
    products,
    renderProductLink,
}) => (
    <div className={s.ProductList}>
        {products.map(item => renderProductLink(item))}
    </div>
)

export default ProdutcListComponent;