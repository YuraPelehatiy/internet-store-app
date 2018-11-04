import { createAction } from 'redux-actions';
import * as constants from './adminConstants';

export const fetchProductsStart = createAction(constants.FETCH_PRODUCTS_START);
export const fetchProductsOk = createAction(constants.FETCH_PRODUCTS_OK);
export const fetchProductsEror = createAction(constants.FETCH_PRODUCTS_ERROR);