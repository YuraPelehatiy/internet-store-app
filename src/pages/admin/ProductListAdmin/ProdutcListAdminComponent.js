import React from 'react';
import ProductLinkAdmin from '../../../components/ProductLinkAdmin/ProductLinkAdmin';
import s from './ProductListAdmin.module.css';

const ProdutcListAdminComponent = ({
    products,
    openModalForm,
    openModalAsk,
    ModalForm,
    ModalAsk,
}) => (
    <div className={s.ProductListAdmin}>
        <button 
            onClick={() => openModalForm()}
            className={s.AddButton}    
        >
            Add new productc
        </button>
        {ModalForm()}
        {ModalAsk()}
        {/* <ModalAsk
            open={isOpenModalAsk}
            onClose={closeModalAsk}
            onPositiveAction
            onNegativeAction={closeModalAsk}
        /> */}
        {products.map(({id, title}) => (
                <ProductLinkAdmin 
                    key={id} 
                    id={id} 
                    title={title}
                    showModalToUpdateProduct={openModalForm}
                    showModalToRemoveProduct={openModalAsk}
                />
            )
        )}
    </div>
)

export default ProdutcListAdminComponent;