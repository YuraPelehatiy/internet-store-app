import { handleActions } from 'redux-actions';
import * as constants from './productsConstants';

const initialState = {
    products: [],
    isLoading: false,
    error: null,
    limit: 12,
    page: 0,
    offset: 0,
};

export default handleActions(
    {
        // Fetch all products
        [constants.FETCH_PRODUCTS_START]: state => ({
            ...state,
            isLoading: true,
            error: null,
        }),
        [constants.FETCH_PRODUCTS_OK]: (state, action) => ({
            ...state,
            isLoading: false,
            products: action.payload.ids,
        }),
        [constants.FETCH_PRODUCTS_ERROR]: (state, action) => ({
            ...state,
            isLoading: false,
            error: action.payload,
        }),

        // Get one product
        [constants.GET_PRODUCT_START]: state => ({
            ...state,
            isLoading: true,
            error: null,
        }),
        [constants.GET_PRODUCT_OK]: (state, action) => ({
            ...state,
            isLoading: false,
            products: [action.payload.id[0]].concat(state.products),
        }),
        [constants.GET_PRODUCT_ERROR]: (state, action) => ({
            ...state,
            isLoading: false,
            error: action.payload,
        }),

        [constants.SET_PAGE]: (state, action) => ({
            ...state,
            page: action.payload.page,
            offset: action.payload.page * state.limit,
        }),
    },
    initialState,
);