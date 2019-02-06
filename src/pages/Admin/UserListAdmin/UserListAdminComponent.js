import React from 'react';
import ProductLinkAdmin from '../../../components/ProductLinkAdmin/ProductLinkAdmin';
import s from './UserListAdmin.module.css';

const UserListAdminComponent = ({
    users,
    openModalForm,
    openModalAsk,
    ModalForm,
    ModalAsk,
}) => (
    <div className={s.ProductListAdmin}>
        {ModalForm()}
        {ModalAsk()}
        {users.map(({ id, firstName, lastName }) => (
            <ProductLinkAdmin
                users
                key={id}
                id={id}
                title={`${firstName} ${lastName}`}
                showModalToUpdateProduct={openModalForm}
                showModalToRemoveProduct={openModalAsk}
            />
        ))}
    </div>
);

export default UserListAdminComponent;