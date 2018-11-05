import { handleActions } from 'redux-actions';
import * as constants from './adminConstants';

const initialState = {
    products: [],
    isLoading: false,
    error: null,
}

export default handleActions(
    {
        [constants.FETCH_PRODUCTS_START]: (state) => ({
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
            error: action.payload.message,
        }),
        [constants.CREATE_PRODUCT_START]: (state) => ({
            ...state,
            error: null,
        }),
        [constants.CREATE_PRODUCT_OK]: (state, action) => ({
            ...state,
            isLoading: false,
            products: [action.payload.ids].concat(state.products),
        }),
        [constants.CREATE_PRODUCT_ERROR]: (state, action) => ({
            ...state,
            isLoading: false,
            error: action.payload.message,
        }),
        [constants.UPDATE_PRODUCT_START]: (state) => ({
            ...state,
            error: null,
        }),
        [constants.UPDATE_PRODUCT_OK]: (state, action) => ({
            ...state,
            isLoading: false,
            products: state.products.map(product => {
                if(product === action.payload.ids[0]){
                    return action.payload.ids[0]
                }
                return product;
            }),
        }),
        [constants.UPDATE_PRODUCT_ERROR]: (state, action) => ({
            ...state,
            isLoading: false,
            error: action.payload.message,
        }),
        [constants.REMOVE_PRODUCT_START]: (state) => ({
            ...state,
            error: null,
        }),
        [constants.REMOVE_PRODUCT_OK]: (state, action) => ({
            ...state,
            isLoading: false,
            products: state.products.filter(product => product !== action.payload.ids[0]),
        }),
        [constants.REMOVE_PRODUCT_ERROR]: (state, action) => ({
            ...state,
            isLoading: false,
            error: action.payload.message,
        }),
    }, 
    initialState
);
