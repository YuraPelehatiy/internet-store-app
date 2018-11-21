import React from 'react';
import { connect } from 'react-redux';
import { compose, branch, renderComponent, withHandlers, withState, mapProps } from 'recompose';
import UserListAdminComponent from './UserListAdminComponent';
import * as adminOperations from '../../../modules/admin/adminOperations';
import * as adminSelectors from '../../../modules/admin/adminSelectors';
import Loader from '../../../components/Loader/Loader';
import ErrorLoadign from '../../../components/ErrorLoading/ErrorLoading';
import ModalAsk from '../../../components/ModalAsk/ModalAsk';
import Modal from '../../../components/Modal/Modal';
import UserForm from '../../../components/UserForm/UserForm';

const mapStateToProps = state => ({
    users: adminSelectors.getUsers(state),
    isLoading: state.admin.isLoading,
    isError: !!state.admin.error,
    error: state.admin.error,
});

const mapStateToDispatch = {
    updateUser: adminOperations.updateUser,
    removeUser: adminOperations.removeUser,
}

export default compose(
    connect(
        mapStateToProps, 
        mapStateToDispatch,
    ),
    withState("isOpenModalForm", "openerModalForm", false),
    withState("user", "setUser", {}),
    withHandlers({
        openModalForm: (props) => (id) => {
            props.setUser(props.users.filter(i => i.id === id)[0]);
            props.openerModalForm(true);
        },
        closeModalForm: props => () => {
            props.openerModalForm(false);
            props.setUser({});
        }
    }),
    withState("isOpenModalAsk", "openerModalAsk", false),
    withHandlers({
        openModalAsk: (props) => (id) => {
            props.setUser(props.users.filter(i => i.id === id)[0]);
            props.openerModalAsk(true);
        },
        closeModalAsk: props => () => {
            props.openerModalAsk(false);
            props.setUser({})
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
                <UserForm 
                    actionAfterSucceeded={props.closeModalForm}
                    onSubmitAction={props.updateUser}
                    onSubmitButtonTitle="Update"
                    user={props.user}
                />
            </Modal>
        ),
        ModalAsk: () => (
            <ModalAsk
                open={props.isOpenModalAsk}
                onClose={props.closeModalAsk}
                id={props.user.id}
                onSubmitAction={props.removeUser}
                onNegativeAction={props.closeModalAsk}
            />
        ),
        ...props,
    }))
)(UserListAdminComponent);