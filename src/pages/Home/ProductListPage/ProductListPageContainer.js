
import { connect } from 'react-redux';
import {
    compose, lifecycle, branch, renderComponent, mapProps, withHandlers,
} from 'recompose';
import * as productsOperations from '../../../modules/products/productsOperations';
import * as productsActions from '../../../modules/products/productsActions';
import ProdutcListPageComponent from './ProdutcListPageComponent';
import ErrorLoadign from '../../../components/ErrorLoading/ErrorLoading';

const mapStateToProps = state => ({
    isError: !!state.products.error,
    error: state.products.error,
    selectedPage: state.products.page,
    offset: state.products.offset,
});

const mapStateToDispatch = {
    fetchProducts: productsOperations.fetchProducts,
    setPage: productsActions.setPage,
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
                this.props.fetchProducts(true);
            }
        },
        componentDidMount() {
            this.props.fetchProducts();
        },
    }),
    mapProps(props => ({
        handleOnPageChange: props.handleOnPageChange,
        selectedPage: props.selectedPage,
    })),
)(ProdutcListPageComponent);