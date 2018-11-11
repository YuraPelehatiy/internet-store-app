import * as Api from '../../api/Api';

export const init = () => async dispatch => {
    try {
        Api.initApi();

        const user = await Api.User.getCurrent();

        console.log(user)
        // add it to redux
    } catch (err) {
        Api.setToken(undefined)
    }
}