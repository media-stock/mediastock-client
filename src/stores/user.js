import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { USER_TYPES } from './types';

const initialState = Map({
    user : null,
    accessToken : null,
    refreshToken : null
});

export const setUser = createAction(USER_TYPES.setUser);
export const setToken = createAction(USER_TYPES.setToken);

export default handleActions({  
    [USER_TYPES.setUser]: (state, action) => {
        const { user } = action.payload;
        return state.set('user', user);
    },
    [USER_TYPES.setToken]: (state, action) => {
        const { accessToken, refreshToken } = action.payload;
        return state.set('accessToken', accessToken).set('refreshToken', refreshToken);
    },
}, initialState);