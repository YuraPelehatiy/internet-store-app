import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderComponent, mapProps, withStateHandlers } from 'recompose';
import * as productsSelectors from '../../modules/products/productsSelectors';
import * as productsOperations from '../../modules/products/productsOperations';
import * as cartActions from '../../modules/cart/cartActions';
import ProductPageComponent from './ProductPageComponent';
import Loader from '../../components/Loader/Loader';
import ErrorLoadign from '../../components/ErrorLoading/ErrorLoading';

const mapStateToProps = (state, props) => ({
    product: productsSelectors.getProduct(state, props.match.params.id),
    isLoading: state.products.isLoading,
    isError: !!state.products.error,
    error: state.products.error,
})

const mapStateToDispatch = {
    getProduct: productsOperations.getProduct,
    addItemToCart: cartActions.add
}

export default compose(
    connect(
        mapStateToProps, 
        mapStateToDispatch
    ),
    lifecycle({
        componentDidMount(){
            this.props.getProduct(this.props.match.params.id)
        }
    }),
    withStateHandlers(
        ({ initialCount = 1 }) => ({
            count: initialCount,
        }),
        {
            increment: ({ count }) => () => ({
                count: count + 1,
            }),
            decrement: ({ count }) => () => {
                if(count - 1 < 0){
                    return ({
                        count: 0,
                    })
                }

                return ({
                    count: count - 1,
                })
            },
            onEnterValueCounter: ({ count }) => (value) => ({
                count: value,
            }),
        }
    ),
    branch(
        props => props.isLoading,
        renderComponent(Loader),
        branch(
            props => props.isError,
            renderComponent(ErrorLoadign),
        ),
    ),
    mapProps(props => ({
        ...props.product,
        addItemToCart: props.addItemToCart,
        count: props.count,
        increment: props.increment,
        decrement: props.decrement,
        onEnterValueCounter: props.onEnterValueCounter,
    }))
)(ProductPageComponent);