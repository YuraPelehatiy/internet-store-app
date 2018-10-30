import React from 'react';
import ProductLinkAdmin from '../../../components/ProductLinkAdmin/ProductLinkAdmin';
import s from './ProductList.module.css';

const ProdutcListComponent = ({
    products,
    updateProductModal,
    removeProduct 
}) => (
    <div className={s.ProductListAdmin}>
        {products.map(({id, title}) => (
                <ProductLinkAdmin 
                    key={id} 
                    id={id} 
                    title={title}
                    updateProductModal={updateProductModal}
                    removeProduct={removeProduct}
                />
            )
        )}
    </div>
)

export default ProdutcListComponent;