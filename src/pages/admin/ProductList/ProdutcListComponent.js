import React from 'react';
import ProductLinkAdmin from '../../../components/ProductLinkAdmin/ProductLinkAdmin';

const ProdutcListComponent = ({
    products
}) => (
    <div>
        {products.map(({id, title}) => (
                <ProductLinkAdmin 
                    key={id} 
                    id={id} 
                    title={title}
                />
            )
        )}
    </div>
)

export default ProdutcListComponent;