import { normalize } from 'normalizr';
import * as schemes from '../../api/schemes'
import * as actions from './cartActions';
import * as Api from '../../api/Api';

export const fetchProducts = refresh => async (dispatch, getState) => {
    try {
        const products = getState().entities.products;
        const itemsIds = getState().cart.items;
        
        if(Object.keys(products).length > 0 || itemsIds.length === 0) {
            return;
        }

        dispatch(actions.fetchProductsStart());

        const res = await Api.Cart.getProductsByIds(itemsIds);
        const { entities } = normalize(res.data, schemes.ProductCollection);
        
        dispatch(actions.fetchProductsOk({
            entities
        }));
    } catch (err) {
        dispatch(actions.fetchProductsError(err.message));
    }
}