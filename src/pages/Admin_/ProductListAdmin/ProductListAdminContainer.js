import React from 'react';
import { connect } from 'react-redux';
import { compose, branch, renderComponent, withHandlers, withState, mapProps } from 'recompose';
import ProdutcListAdminComponent from './ProdutcListAdminComponent';
import * as adminOperations from '../../../modules/admin/adminOperations';
import * as adminSelectors from '../../../modules/admin/adminSelectors';
import Loader from '../../../components/Loader/Loader';
import ErrorLoadign from '../../../components/ErrorLoading/ErrorLoading';
import ModalAsk from '../../../components/ModalAsk/ModalAsk';
import Modal from '../../../components/Modal/Modal';
import ProductForm from '../../../components/ProductForm/ProductForm';

const mapStateToProps = state => ({
    products: adminSelectors.getProducst(state),
    isLoading: state.admin.isLoading,
    isError: !!state.admin.error,
    error: state.admin.error,
});

const mapStateToDispatch = {
    createProduct: adminOperations.createProduct,
    updateProduct: adminOperations.updateProduct,
    removeProduct: adminOperations.removeProduct,
}


export default compose(
    connect(
        mapStateToProps, 
        mapStateToDispatch,
    ),
    withState("isOpenModalForm", "openerModalForm", false),
    withState("modalAction", "setModalAction", {}),
    withHandlers({
        openModalForm: (props) => (id) => {
            if(id){
                props.setModalAction({
                    product: props.products.filter(i => i.id === id)[0],
                    title: "Update",
                    action: props.updateProduct,
                });
            } else {
                props.setModalAction({
                    title: "Create",
                    action: props.createProduct
                });
            }
            props.openerModalForm(true);
        },
        closeModalForm: props => () => {
            props.openerModalForm(false);
            props.setModalAction({});
        }
    }),
    withState("isOpenModalAsk", "openerModalAsk", false),
    withHandlers({
        openModalAsk: (props) => (id) => {
            props.setModalAction({
                action: props.removeProduct,
                id: id,
            })
            props.openerModalAsk(true);
        },
        closeModalAsk: props => () => {
            props.openerModalAsk(false);
            props.setModalAction({});
        }
    }),
    branch(
        props => props.isLoading,
        renderComponent(Loader),
        branch(
            props => props.isError,
            renderComponent(ErrorLoadign),
        )
    ),
    mapProps(props => ({
        ModalForm: () => (
            <Modal
                open={props.isOpenModalForm}
                onClose={props.closeModalForm}
            >
                <ProductForm 
                    onClose={props.closeModalForm}
                    onSubmitAction={props.modalAction.action}
                    onSubmitButtonTitle={props.modalAction.title}
                    product={props.modalAction.product || {}}
                />
            </Modal>
        ),
        ModalAsk: () => (
            <ModalAsk
                open={props.isOpenModalAsk}
                onClose={props.closeModalAsk}
                id={props.modalAction.id}
                onSubmitAction={props.modalAction.action}
                onNegativeAction={props.closeModalAsk}
            />
        ),
        ...props,
    }))
)(ProdutcListAdminComponent);