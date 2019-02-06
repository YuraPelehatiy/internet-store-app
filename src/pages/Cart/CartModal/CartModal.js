import React from 'react';
import Modal from 'react-responsive-modal';
import CartPageContainer from '../CartPageContainer';

const CartPageModal = ({ history }) => (
    <Modal open onClose={() => history.go(-1)}>
        <CartPageContainer />
    </Modal>
);

export default CartPageModal;