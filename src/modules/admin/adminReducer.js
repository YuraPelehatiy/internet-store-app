import { handleActions } from 'redux-actions';
import * as constants from './adminConstants';

const initialState = {
    products: [],
    users: [],
    isLoading: false,
    error: null,
}

export default handleActions(
    {
        // Fetch all products
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
            error: action.payload,
        }),

        // Create product
        [constants.CREATE_PRODUCT_START]: (state) => ({
            ...state,
            error: null,
        }),
        [constants.CREATE_PRODUCT_OK]: (state, action) => ({
            ...state,
            products: action.payload.ids.concat(state.products),
        }),
        [constants.CREATE_PRODUCT_ERROR]: (state, action) => ({
            ...state,
            error: action.payload,
        }),

        // Update product
        [constants.UPDATE_PRODUCT_START]: (state) => ({
            ...state,
            error: null,
        }),
        [constants.UPDATE_PRODUCT_OK]: (state, action) => ({
            ...state,
            products: state.products.map(product => {
                if(product === action.payload.ids[0]){
                    return action.payload.ids[0]
                }
                return product;
            }),
        }),
        [constants.UPDATE_PRODUCT_ERROR]: (state, action) => ({
            ...state,
            error: action.payload,
        }),

        // Remove product
        [constants.REMOVE_PRODUCT_START]: (state) => ({
            ...state,
            error: null,
        }),
        [constants.REMOVE_PRODUCT_OK]: (state, action) => ({
            ...state,
            products: state.products.filter(product => product !== action.payload.ids[0]),
        }),
        [constants.REMOVE_PRODUCT_ERROR]: (state, action) => ({
            ...state,
            error: action.payload,
        }),

        // Get one product
        [constants.GET_PRODUCT_START]: (state) => ({
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

        // Fetch all users
        [constants.FETCH_USERS_START]: (state) => ({
            ...state,
            isLoading: true,
            error: null,
        }),
        [constants.FETCH_USERS_OK]: (state, action) => ({
            ...state,
            isLoading: false,
            users: action.payload.ids,
        }),
        [constants.FETCH_USERS_ERROR]: (state, action) => ({
            ...state,
            isLoading: false,
            error: action.payload,
        }),

        // Update user
        [constants.UPDATE_USER_START]: (state) => ({
            ...state,
            error: null,
        }),
        [constants.UPDATE_USER_OK]: (state, action) => ({
            ...state,
            users: state.users.map(user => {
                if(user === action.payload.ids[0]){
                    return action.payload.ids[0]
                }
                return user;
            }),
        }),
        [constants.UPDATE_USER_ERROR]: (state, action) => ({
            ...state,
            error: action.payload,
        }),

        // Remove user
        [constants.REMOVE_USER_START]: (state) => ({
            ...state,
            error: null,
        }),
        [constants.REMOVE_USER_OK]: (state, action) => ({
            ...state,
            users: state.users.filter(user => user !== action.payload.ids[0]),
        }),
        [constants.REMOVE_USER_ERROR]: (state, action) => ({
            ...state,
            error: action.payload,
        }),

        // Get one product
        [constants.GET_USER_START]: (state) => ({
            ...state,
            isLoading: true,
            error: null,
        }),
        [constants.GET_USER_OK]: (state, action) => ({
            ...state,
            isLoading: false,
            users: [action.payload.id[0]].concat(state.users),
        }),
        [constants.GET_USER_ERROR]: (state, action) => ({
            ...state,
            isLoading: false,
            error: action.payload,
        }),
    }, 
    initialState
);
