import { handleActions } from 'redux-actions';
import * as constants from './adminConstants';
import { adminReducerProducts } from './adminReducerHandlers/adminReducerProducts';
import { adminReducerUsers } from './adminReducerHandlers/adminReducerUsers';

const initialState = {
    products: [],
    users: [],
    isLoading: false,
    error: null,
    limit: 10,
    offsetProducts: 0,
    offsetUsers: 0,
    pageProducts: 0,
    pageUsers: 0,
};

export default handleActions(
    {
        ...adminReducerProducts,
        ...adminReducerUsers,
        [constants.SET_PAGE_PRODUCTS]: (state, action) => ({
            ...state,
            pageProducts: action.payload.page,
            offsetProducts: action.payload.page * state.limit,
        }),
        [constants.SET_PAGE_USERS]: (state, action) => ({
            ...state,
            pageUsers: action.payload.page,
            offsetUsers: action.payload.page * state.limit,
        }),
    },
    initialState,
);