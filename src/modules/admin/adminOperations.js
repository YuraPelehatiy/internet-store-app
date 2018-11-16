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
        dispatch(actions.fetchProductsError(err.message));
    }
}

export const createProduct = (newProduct) => async (dispatch) => {
    try {
        dispatch(actions.createProductStart());

        const res = await Api.AdminProducts.createProduct(newProduct);
        const { result: ids, entities } = normalize(res.data, schemes.AdminProductCollection);
        console.log(entities)
        dispatch(actions.createProductOk({
            ids,
            entities
        }));
    } catch (err) {
        dispatch(actions.createProductError(err.message));
    }
}

export const updateProduct = (productId, productBody) => async (dispatch) => {
    try {
        dispatch(actions.updateProductStart());

        const res = await Api.AdminProducts.updateProductById(productId, productBody);

        const { result: ids, entities } = normalize(res.data, schemes.AdminProductCollection);
        
        dispatch(actions.updateProductOk({
            ids,
            entities
        }));
    } catch (err) {
        dispatch(actions.updateProductError(err.message));
    }
}

export const removeProduct = (id) => async (dispatch) => {
    try {
        dispatch(actions.removeProductStart());

        const res = await Api.AdminProducts.removeProductById(id);

        if (res && res.data && res.data.success){
            const ids = [id]
            dispatch(actions.removeProductOk({
                ids
            }));
        }
    } catch (err) {
        dispatch(actions.removeProductError(err.message));
    }
}

export const getProduct = (id, refresh) => async (dispatch, getState) => {
    try {
        const product = getState().entities.products[id];

        if(product) {
            return;
        }

        dispatch(actions.getProductStart());

        const res = await Api.AdminProducts.getProductsById(id);
        const { result, entities } = normalize(res.data, schemes.AdminProductCollection);

        dispatch(actions.getProductOk({
            id: result,
            entities
        }));
    } catch (err) {
        dispatch(actions.getProductError(err.message));
    }
}

export const fetchUsers = () => async (dispatch) => {
    try {
        dispatch(actions.fetchUsersStart());

        const res = await Api.AdminUsers.fetchUsers();
        const { result: ids, entities } = normalize(res.data, schemes.AdminUserCollection);

        dispatch(actions.fetchUsersOk({
            ids,
            entities
        }));
    } catch (err) {
        dispatch(actions.fetchUsersError(err.message));
    }
}

export const updateUser = (productId, productBody) => async (dispatch) => {
    try {
        dispatch(actions.updateUserStart());

        const res = await Api.AdminUsers.updateUserById(productId, productBody);

        const { result: ids, entities } = normalize(res.data, schemes.AdminUserCollection);
        
        dispatch(actions.updateUserOk({
            ids,
            entities
        }));
    } catch (err) {
        dispatch(actions.updateUserError(err.message));
    }
}

export const removeUser = (id) => async (dispatch) => {
    try {
        dispatch(actions.removeUserStart());

        const res = await Api.AdminUsers.removeUserById(id);

        if (res && res.data && res.data.success){
            const ids = [id]
            dispatch(actions.removeUserOk({
                ids
            }));
        }
    } catch (err) {
        dispatch(actions.removeUserError(err.message));
    }
}

export const getUser = (id, refresh) => async (dispatch, getState) => {
    try {
        const product = getState().entities.users[id];

        if(product) {
            return;
        }

        dispatch(actions.getUserStart());

        const res = await Api.AdminUsers.getUserById(id);
        const { result, entities } = normalize(res.data, schemes.AdminUserCollection);

        dispatch(actions.getUserOk({
            id: result,
            entities
        }));
    } catch (err) {
        dispatch(actions.getUserError(err.message));
    }
}