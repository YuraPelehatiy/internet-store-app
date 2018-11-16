import { createAction } from 'redux-actions';
import * as constants from './adminConstants';

export const fetchProductsStart = createAction(constants.FETCH_PRODUCTS_START);
export const fetchProductsOk = createAction(constants.FETCH_PRODUCTS_OK);
export const fetchProductsError = createAction(constants.FETCH_PRODUCTS_ERROR);

export const createProductStart = createAction(constants.CREATE_PRODUCT_START);
export const createProductOk = createAction(constants.CREATE_PRODUCT_OK);
export const createProductError = createAction(constants.CREATE_PRODUCT_ERROR);

export const updateProductStart = createAction(constants.UPDATE_PRODUCT_START);
export const updateProductOk = createAction(constants.UPDATE_PRODUCT_OK);
export const updateProductError = createAction(constants.UPDATE_PRODUCT_ERROR);

export const removeProductStart = createAction(constants.REMOVE_PRODUCT_START);
export const removeProductOk = createAction(constants.REMOVE_PRODUCT_OK);
export const removeProductError = createAction(constants.REMOVE_PRODUCT_ERROR);

export const getProductStart = createAction(constants.GET_PRODUCT_START);
export const getProductOk = createAction(constants.GET_PRODUCT_OK);
export const getProductError = createAction(constants.GET_PRODUCT_ERROR);

export const fetchUsersStart = createAction(constants.FETCH_USERS_START);
export const fetchUsersOk = createAction(constants.FETCH_USERS_OK);
export const fetchUsersError = createAction(constants.FETCH_USERS_ERROR);

export const updateUserStart = createAction(constants.UPDATE_USER_START);
export const updateUserOk = createAction(constants.UPDATE_USER_OK);
export const updateUserError = createAction(constants.UPDATE_USER_ERROR);

export const removeUserStart = createAction(constants.REMOVE_USER_START);
export const removeUserOk = createAction(constants.REMOVE_USER_OK);
export const removeUserError = createAction(constants.REMOVE_PRODUCT_ERROR);

export const getUserStart = createAction(constants.GET_USER_START);
export const getUserOk = createAction(constants.GET_USER_OK);
export const getUserError = createAction(constants.GET_USER_ERROR);