import { handleActions } from 'redux-actions';
import * as constants from './appConstants';

const initialState = {
    user: {},
};

export default handleActions(
    {
        [constants.ADD_USER]: (state, action) => ({
            ...state,
            user: action.payload.user,
        }),
        [constants.REMOVE_USER]: state => ({
            ...state,
            user: {},
        }),
    },
    initialState,
);