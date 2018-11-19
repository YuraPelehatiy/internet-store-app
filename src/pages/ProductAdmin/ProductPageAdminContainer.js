import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderComponent, mapProps } from 'recompose';
import ProductPageAdminComponent from './ProductPageAdminComponent';
import * as adminOperations from '../../modules/admin/adminOperations';
import * as adminSelectors from '../../modules/admin/adminSelectors';
import Loader from '../../components/Loader/Loader';
import ErrorLoadign from '../../components/ErrorLoading/ErrorLoading';

const mapStateToProps = (state, props)=> ({
    product: adminSelectors.getProduct(state, props.match.params.id),
    isLoading: state.admin.isLoading,
    isError: !!state.admin.error,
    error: state.admin.error,
})

const mapStateToDispatch = {
    getProduct: adminOperations.getProduct,
    removeProduct: adminOperations.removeProduct,
    updateProduct: adminOperations.updateProduct,
}

export default compose(
    connect(
        mapStateToProps,
        mapStateToDispatch,
    ),
    lifecycle({
        componentDidMount(){
            this.props.getProduct(this.props.match.params.id)
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
        updateProduct: props.updateProduct,
        removeProduct: props.removeProduct,
        product: props.product,
        history: props.history,
    })),
)(ProductPageAdminComponent);