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