import { createAction } from 'redux-actions';
import * as constants from './cartConstants';

export const add = createAction(constants.ADD);
export const remove = createAction(constants.REMOVE);

export const fetchProductsStart = createAction(constants.FETCH_PRODUCTS_START);
export const fetchProductsOk = createAction(constants.FETCH_PRODUCTS_OK);
export const fetchProductsError = createAction(constants.FETCH_PRODUCTS_ERROR);

export const increase = createAction(constants.INCREASE);
export const decrease = createAction(constants.DECREASE);