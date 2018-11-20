
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderComponent, mapProps, withHandlers } from 'recompose';
import * as adminOperations from '../../../modules/admin/adminOperations';
import * as adminActions from '../../../modules/admin/adminActions';
import ProdutcListPageAdminComponent from './ProdutcListPageAdminComponent';
import ErrorLoadign from '../../../components/ErrorLoading/ErrorLoading';

const mapStateToProps = state => ({
    isError: !!state.admin.error,
    error: state.admin.error,
    selectedPage: state.admin.pageProducts,
    offset: state.admin.offsetProducts
});

const mapStateToDispatch = {
    fetchProducts: adminOperations.fetchProducts,
    setPage: adminActions.setPageProducts,
}

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
            props.setPage({ page: selected })
        }
    }),
    lifecycle({
        componentDidUpdate(nextProps){
            if(this.props.offset !== nextProps.offset){
                this.props.fetchProducts(true)
            }
        },
        componentDidMount(){
            this.props.fetchProducts();
        }
    }),
    mapProps(props => ({
        handleOnPageChange: props.handleOnPageChange,
        selectedPage: props.selectedPage,
    }))
)(ProdutcListPageAdminComponent);