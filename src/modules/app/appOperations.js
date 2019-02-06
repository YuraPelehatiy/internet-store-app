import * as Api from '../../api/Api';
import * as appActions from './appActions';

export const init = () => async (dispatch) => {
    try {
        Api.initApi();

        const res = await Api.User.getCurrent();

        dispatch(appActions.addUser({
            user: res.data.user,
        }));
    } catch (err) {
        Api.setToken(undefined);
    }
};

export const logout = () => (dispatch) => {
    Api.removeToken();

    dispatch(appActions.removeUser());
};

export const login = values => async (dispatch) => {
    try {
        const res = await Api.Auth.login(values);

        Api.setToken(res.data.token);

        const resUser = await Api.User.getCurrent();

        dispatch(appActions.addUser({
            user: resUser.data.user,
        }));
    } catch (err) {
        throw new Error();
    }
};

export const register = values => async () => {
    try {
        const res = await Api.Auth.register(values);

        if (!res.data.success) {
            throw new Error();
        }
    } catch (err) {
        throw new Error();
    }
};

export const remember = values => async () => {
    try {
        const res = await Api.Auth.remember(values);

        if (!res.data.success) {
            throw new Error();
        }
    } catch (err) {
        throw new Error();
    }
};