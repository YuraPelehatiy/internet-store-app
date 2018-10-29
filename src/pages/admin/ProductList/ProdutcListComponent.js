import React from 'react';
import ProductLinkAdmin from '../../../components/ProductLinkAdmin/ProductLinkAdmin';

const ProdutcListComponent = ({
    products,
    updateProductModal,
    removeProduct 
}) => (
    <div>
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