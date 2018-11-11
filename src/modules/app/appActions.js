import { createAction } from 'redux-actions';
import * as constants from './appConstants';

export const addUser = createAction(constants.ADD_USER);
export const removeUser = createAction(constants.REMOVE_USER);