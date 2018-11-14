import { normalize } from 'normalizr';
import * as schemes from '../../api/schemes'
import * as actions from './productsActions';
import * as Api from '../../api/Api';

export const fetchProducts = refresh => async (dispatch, getState) => {
    try {
        const ids = getState().products.products;

        if(ids.length > 1 && !refresh) {
            return;
        }

        dispatch(actions.fetchProductsStart());

        const res = await Api.Products.fetchProducts();
        const { result, entities } = normalize(res.data, schemes.ProductCollection);

        dispatch(actions.fetchProductsOk({
            ids: result,
            entities
        }));
    } catch (err) {
        dispatch(actions.fetchProductsError(err.message));
    }
}

export const getProduct = (id, refresh) => async (dispatch, getState) => {
    try {
        const product = getState().entities.products[id];

        if(product) {
            return;
        }

        dispatch(actions.getProductStart());

        const res = await Api.Products.getProductsById(id);
        const { result, entities } = normalize(res.data, schemes.ProductCollection);

        dispatch(actions.getProductOk({
            id: result,
            entities
        }));
    } catch (err) {
        dispatch(actions.getProductError(err.message));
    }
}