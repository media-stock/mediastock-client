import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

// redux init
import { userState } from './state';
import { USER_TYPES } from './types';

export const setUser = createAction(USER_TYPES.SET_USER);
export const setToken = createAction(USER_TYPES.SET_TOKEN);

export default handleActions(
    {
        [USER_TYPES.SET_USER]: (state, action) => {
            const user = action.payload;
            return state.set('user', user);
        },
        [USER_TYPES.SET_TOKEN]: (state, action) => {
            const accessToken = action.payload;
            return state.set('accessToken', accessToken);
        },
    },
    userState,
);
