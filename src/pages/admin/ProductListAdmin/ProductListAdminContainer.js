import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderComponent, withHandlers, withState, mapProps } from 'recompose';
import ProdutcListAdminComponent from './ProdutcListAdminComponent';
import * as adminOperations from '../../../modules/admin/adminOperations';
import * as adminSelectors from '../../../modules/admin/adminSelectors';
import Loader from '../../../components/Loader/Loader';
import ErrorLoadign from '../../../components/ErrorLoading/ErrorLoading';
import ModalForm from '../../../components/ModalForm/ModalForm';
import ModalAsk from '../../../components/ModalAsk/ModalAsk';

const mapStateToProps = state => ({
    products: adminSelectors.getProducst(state),
    isLoading: state.admin.isLoading,
    isError: !!state.admin.error,
    error: state.admin.error,
});

const mapStateToDispatch = {
    fetchProducts: adminOperations.fetchProducts,
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
    withState("modalActionAsk", "setModalActionAsk", {}),
    withHandlers({
        openModalAsk: (props) => (id) => {
            console.log(id)
            props.setModalActionAsk({
                action: props.removeProduct,
                id: id,
            })
            props.openerModalAsk(true);
        },
        closeModalAsk: props => (id) => {
            props.openerModalAsk(false);
            props.setModalActionAsk({});
        }
    }),
    lifecycle({
        componentDidMount(){
            this.props.fetchProducts();
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
            <ModalForm
                open={props.isOpenModalForm}
                onClose={props.closeModalForm}
                onSubmitAction={props.modalAction.action}
                onSubmitButtonTitle={props.modalAction.title}
                product={props.modalAction.product || {}}
            />
        ),
        ModalAsk: () => (
            <ModalAsk
                open={props.isOpenModalAsk}
                onClose={props.closeModalAsk}
                id={props.modalActionAsk.id}
                onSubmitAction={props.modalActionAsk.action}
                onNegativeAction={props.closeModalAsk}
            />
        ),
        ...props,
    })

    )
)(ProdutcListAdminComponent);