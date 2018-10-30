import React from 'react';
import ProductLinkAdmin from '../../../components/ProductLinkAdmin/ProductLinkAdmin';
import s from './ProductListAdmin.module.css';
import ModalUpdateProductContainer from '../../../components/ModalUpdateProduct/ModalUpdateProductContainer';
import ModalAddProductContainer from '../../../components/ModalAddProduct/ModalAddProductContainer';
import ModalRemoveProductContainer from '../../../components/ModalRemoveProduct/ModalRemoveProductContainer';

const ProdutcListAdminComponent = ({
    products,
    showModalToUpdateProduct,
    showModalToRemoveProduct,
    closeModalToUpdateProduct,
    closeModalToRemoveProduct,
    showModalUpdate,
    showModalRemove,
    productToEdit,
    updateProduct,
    createProduct,
    handleAnswerToRemoveProduct,
}) => (
    <div className={s.ProductListAdmin}>
        <ModalUpdateProductContainer 
            showModal={showModalUpdate} 
            onCloseModal={closeModalToUpdateProduct}
            productToEdit={productToEdit}
            updateProduct={updateProduct}
        />
        <ModalAddProductContainer
            createProduct={createProduct}
        />
        <ModalRemoveProductContainer
            showModal={showModalRemove}
            onCloseModal={closeModalToRemoveProduct}
            handleAnswerToRemoveProduct={handleAnswerToRemoveProduct}
        />
        {products.map(({id, title}) => (
                <ProductLinkAdmin 
                    key={id} 
                    id={id} 
                    title={title}
                    showModalToUpdateProduct={showModalToUpdateProduct}
                    showModalToRemoveProduct={showModalToRemoveProduct}
                />
            )
        )}
    </div>
)

export default ProdutcListAdminComponent;