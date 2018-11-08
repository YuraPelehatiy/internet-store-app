import { handleActions } from 'redux-actions';
import * as constants from './cartConstants';

const initialState = {
    items: [],
    isLoading: false,
    error: null,
}

export default handleActions(
    {
        [constants.ADD]: (state, action) => ({
            ...state,
            items: [action.payload.id].concat(state.items),
        }),
        [constants.REMOVE]: (state, action) => ({
            ...state,
            items: state.items.filter(id => id !== action.payload.id),
        }),
        [constants.FETCH_PRODUCTS_START]: (state) => ({
            ...state,
            isLoading: true,
            error: null,
        }),
        [constants.FETCH_PRODUCTS_OK]: (state, action) => ({
            ...state,
            isLoading: false,
        }),
        [constants.FETCH_PRODUCTS_ERROR]: (state, action) => ({
            ...state,
            isLoading: false,
            error: action.payload.message,
        }),
    }, 
    initialState
);