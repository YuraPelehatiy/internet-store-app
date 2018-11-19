import * as constants from '../adminConstants';

export const adminReducerUsers = {
    
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
            error: action.payload.message,
        }),

        // Update user
        [constants.UPDATE_USER_START]: (state) => ({
            ...state,
            error: null,
        }),
        [constants.UPDATE_USER_OK]: (state, action) => ({
            ...state,
            isLoading: false,
            users: state.users.map(user => {
                if(user === action.payload.ids[0]){
                    return action.payload.ids[0]
                }
                return user;
            }),
        }),
        [constants.UPDATE_USER_ERROR]: (state, action) => ({
            ...state,
            isLoading: false,
            error: action.payload.message,
        }),

        // Remove user
        [constants.REMOVE_USER_START]: (state) => ({
            ...state,
            error: null,
        }),
        [constants.REMOVE_USER_OK]: (state, action) => ({
            ...state,
            isLoading: false,
            users: state.users.filter(user => user !== action.payload.ids[0]),
        }),
        [constants.REMOVE_USER_ERROR]: (state, action) => ({
            ...state,
            isLoading: false,
            error: action.payload.message,
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
            error: action.payload.message,
        }),
};
