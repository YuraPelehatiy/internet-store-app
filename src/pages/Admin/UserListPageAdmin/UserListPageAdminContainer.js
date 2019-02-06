
import { connect } from 'react-redux';
import {
    compose, lifecycle, branch, renderComponent, mapProps, withHandlers,
} from 'recompose';
import * as adminOperations from '../../../modules/admin/adminOperations';
import * as adminActions from '../../../modules/admin/adminActions';
import UserListPageAdminComponent from './UserListPageAdminComponent';
import ErrorLoadign from '../../../components/ErrorLoading/ErrorLoading';

const mapStateToProps = state => ({
    isError: !!state.admin.error,
    error: state.admin.error,
    selectedPage: state.admin.pageUsers,
    offset: state.admin.offsetUsers,
});

const mapStateToDispatch = {
    fetchUsers: adminOperations.fetchUsers,
    setPage: adminActions.setPageUsers,
};

export default compose(
    connect(
        mapStateToProps,
        mapStateToDispatch,
    ),
    branch(
        props => props.isError,
        renderComponent(ErrorLoadign),
    ),
    withHandlers({
        handleOnPageChange: props => ({ selected }) => {
            props.setPage({ page: selected });
        },
    }),
    lifecycle({
        componentDidUpdate(nextProps) {
            if (this.props.offset !== nextProps.offset) {
                this.props.fetchUsers(true);
            }
        },
        componentDidMount() {
            this.props.fetchUsers();
        },
    }),
    mapProps(props => ({
        handleOnPageChange: props.handleOnPageChange,
        selectedPage: props.selectedPage,
    })),
)(UserListPageAdminComponent);