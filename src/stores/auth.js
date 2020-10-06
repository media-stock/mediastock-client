import { createAction, handleActions } from 'redux-actions';
import * as authApi from 'lib/api';
import { getJwtDecode } from 'lib/utils';

// redux init
import { authState } from './state';
import { AUTH_TYPES, USER_TYPES } from './types';
import { createPromiseState, setImmutableState } from 'lib/redux';

export const setLoginInput = createAction(AUTH_TYPES.SET_LOGIN_INPUT);
export const setRegisterInput = createAction(AUTH_TYPES.SET_REGISTER_INPUT);

export const onLogin = () => {
    return async (dispatch, getState) => {
        const { input, pending } = getState().auth.toJS()?.login;
        const { email, password } = input;

        if (pending) return;
        dispatch({ type: AUTH_TYPES.LOGIN });
        const { status, data } = await authApi.onLogin({ email, password });

        if (status === 200) {
            const { accessToken } = data;
            const { user } = getJwtDecode(accessToken);

            dispatch({ type: USER_TYPES.SET_USER, payload: user });
            dispatch({ type: USER_TYPES.SET_TOKEN, payload: accessToken });
            dispatch({ type: AUTH_TYPES.LOGIN_DONE });
        } else {
            dispatch({ type: AUTH_TYPES.LOGIN_ERROR, payload: { status, data } });
        }
    };
};

export default handleActions(
    {
        [AUTH_TYPES.SET_LOGIN_INPUT]: (state, action) => {
            const { name, value } = action.payload;
            return state.setIn(['login', 'input', name], value);
        },
        [AUTH_TYPES.SET_REGISTER_INPUT]: (state, action) => {
            const { name, value } = action.payload;
            return state.setIn(['register', 'input', name], value);
        },
        [AUTH_TYPES.LOGIN]: (state, action) => {
            const pendingState = createPromiseState.pending();
            return setImmutableState(state, 'login', pendingState);
        },
        [AUTH_TYPES.LOGIN_DONE]: (state, action) => {
            const doneState = createPromiseState.done(null);
            return setImmutableState(state, 'login', doneState);
        },
        [AUTH_TYPES.LOGIN_ERROR]: (state, action) => {
            const errorState = createPromiseState.error(action.payload);
            return setImmutableState(state, 'login', errorState);
        },
    },
    authState,
);
