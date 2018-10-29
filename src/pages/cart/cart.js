import React from 'react';
import Modal from 'react-responsive-modal';
import CartList from './CartList/CartListContainer';

const CartPage = ({ location }) => {
    if(location && location.state && location.state.modal){
        return(
            <Modal open={location.state.modal}>
                <CartList />
            </Modal>
        );
    }

    return (
        <CartList />
    );
}

export default CartPage;