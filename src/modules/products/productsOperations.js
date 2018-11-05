import { normalize } from 'normalizr';
import * as schemes from '../../api/schemes'
import * as actions from './productsActions';
import * as Api from '../../api/Api'

export const fetchProducts = () => async (dispatch) => {
    try {
        dispatch(actions.fetchProductsStart());

        const res = await Api.Products.fetchProducts();
        const { result: ids, entities } = normalize(res.data, schemes.ProductCollection);

        dispatch(actions.fetchProductsOk({
            ids,
            entities
        }));
    } catch (err) {
        dispatch(actions.fetchProductsError(err.message));
    }
}