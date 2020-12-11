import { createAction, handleActions } from 'redux-actions';

import { authState } from './state';
import { AUTH_TYPES } from './type';
import { USER_TYPES } from '../user/type';
import { createPromiseThunk, createPromiseState, setImmutableState } from '../redux';
import { getJWTDecoded } from 'lib/utils';
import * as authAPI from 'services/auth';

export const onLoginSuccess = ({ data, dispatch }) => {
    const accessToken = data?.accessToken;

    if (accessToken) {
        const user = getJWTDecoded(accessToken);

        dispatch({ type: USER_TYPES.SET_USER, payload: user });
        dispatch({ type: USER_TYPES.SET_ACCESS_TOKEN, payload: accessToken });
    }

    // console.log(`onLoginSuccess`, data?.accessToken);
};

export const onLogin = createPromiseThunk(AUTH_TYPES.ON_LOGIN, authAPI.onLogin, {
    after: [onLoginSuccess],
});
export const onRegister = createPromiseThunk(AUTH_TYPES.ON_REGISTER, authAPI.onRegister);

export default handleActions(
    {
        [AUTH_TYPES.ON_LOGIN]: (state, action) => {
            const pendingState = createPromiseState.pending();
            return setImmutableState(state, 'login', pendingState);
        },
        [AUTH_TYPES.ON_LOGIN_DONE]: (state, action) => {
            const doneState = createPromiseState.done(null);
            return setImmutableState(state, 'login', doneState);
        },
        [AUTH_TYPES.ON_LOGIN_ERROR]: (state, action) => {
            const errorState = createPromiseState.error(action.payload);
            return setImmutableState(state, 'login', errorState);
        },
        [AUTH_TYPES.ON_REGISTER]: (state, action) => {
            const pendingState = createPromiseState.pending();
            return setImmutableState(state, 'register', pendingState);
        },
        [AUTH_TYPES.ON_REGISTER_DONE]: (state, action) => {
            const doneState = createPromiseState.done(null);
            return setImmutableState(state, 'register', doneState);
        },
        [AUTH_TYPES.ON_REGISTER_ERROR]: (state, action) => {
            const errorState = createPromiseState.error(action.payload);
            return setImmutableState(state, 'register', errorState);
        },
    },
    authState,
);
