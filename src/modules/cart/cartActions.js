import { createAction } from 'redux-actions';
import * as constants from './cartConstants';

export const add = createAction(constants.ADD);