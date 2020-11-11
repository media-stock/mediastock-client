import { createAction, handleActions } from 'redux-actions';

import { userState } from './state';
import { USER_TYPES } from './type';

export const setUser = createAction(USER_TYPES.SET_USER);
export const setAccessToken = createAction(USER_TYPES.SET_ACCESS_TOKEN);

export default handleActions(
    {
        [USER_TYPES.SET_USER]: (state, action) => {
            const user = action.payload;
            return state.setIn(['logined', 'user'], user);
        },
        [USER_TYPES.SET_ACCESS_TOKEN]: (state, action) => {
            const accessToken = action.payload;
            return state.setIn(['logined', 'accessToken'], accessToken);
        },
    },
    userState,
);
