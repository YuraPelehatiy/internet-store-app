import { handleActions } from 'redux-actions';
import { adminReducerProducts } from './adminReducerHandlers/adminReducerProducts';
import { adminReducerUsers } from './adminReducerHandlers/adminReducerUsers';

const initialState = {
    products: [],
    users: [],
    isLoading: false,
    error: null,
}

export default handleActions(
    {
        ...adminReducerProducts,
        ...adminReducerUsers,
    }, 
    initialState
);
