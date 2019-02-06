import { createAction } from 'redux-actions';
import * as constants from './productsConstants';

export const fetchProductsStart = createAction(constants.FETCH_PRODUCTS_START);
export const fetchProductsOk = createAction(constants.FETCH_PRODUCTS_OK);
export const fetchProductsError = createAction(constants.FETCH_PRODUCTS_ERROR);

export const getProductStart = createAction(constants.GET_PRODUCT_START);
export const getProductOk = createAction(constants.GET_PRODUCT_OK);
export const getProductError = createAction(constants.GET_PRODUCT_ERROR);

export const setPage = createAction(constants.SET_PAGE);