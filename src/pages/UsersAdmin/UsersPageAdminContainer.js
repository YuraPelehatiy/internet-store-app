import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderComponent, mapProps } from 'recompose';
import UsersPageAdminComponent from './UsersPageAdminComponent';
import * as adminOperations from '../../modules/admin/adminOperations';
import * as adminSelectors from '../../modules/admin/adminSelectors';
import Loader from '../../components/Loader/Loader';
import ErrorLoadign from '../../components/ErrorLoading/ErrorLoading';

const mapStateToProps = (state, props)=> ({
    user: adminSelectors.getUser(state, props.match.params.id),
})

const mapStateToDispatch = {
    getUser: adminOperations.getUser,
    removeUser: adminOperations.removeUser,
    updateUser: adminOperations.updateUser,
}

export default compose(
    connect(
        mapStateToProps,
        mapStateToDispatch,
    ),
    lifecycle({
        componentDidMount(){
            this.props.getUser(this.props.match.params.id)
        }
    }),
    branch(
        props => props.isLoading,
        renderComponent(Loader),
        branch(
            props => props.isError,
            renderComponent(ErrorLoadign),
        ),
    ),
    mapProps(props => ({
        updateUser: props.updateUser,
        removeUser: props.removeUser,
        user: props.user,
        history: props.history,
    })),
)(UsersPageAdminComponent);