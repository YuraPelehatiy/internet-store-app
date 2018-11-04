import { normalize } from 'normalizr';
import * as schemes from '../../api/schemes'
import * as actions from './adminActions';
import * as Api from '../../api/Api'

export const fetchProducts = () => async (dispatch) => {
    try {
        dispatch(actions.fetchProductsStart());

        const res = await Api.AdminProducts.fetchProducts();
        const { result: ids, entities } = normalize(res.data, schemes.AdminProductCollection);

        dispatch(actions.fetchProductsOk({
            ids,
            entities
        }));
    } catch (err) {
        dispatch(actions.fetchProductsEror(err.message));
    }
}