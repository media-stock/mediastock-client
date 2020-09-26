import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { AUTH_TYPES, USER_TYPES } from './types';

import * as authApi from 'lib/api';
import { getJwtDecode } from 'lib/utils';

const initialState = Map({
    login : Map({
        input : Map({
            email : '',
            password : ''
        }),
        pending : false,
        done : false,
        error : null
    }),
    register : Map({
        input : Map({
            email : '',
            password : '',
            name : ''
        }),
        pending : false,
        done : false,
        error : null
    }),
    social : Map({
        pending : false,
        done : false,
        error : null
    })
});

export const setLoginInput = createAction(AUTH_TYPES.setLoginInput);
export const setRegisterInput = createAction(AUTH_TYPES.setRegisterInput);

export const onLogin = () => {
    return async(dispatch, getState) => {
        const { login } = getState().auth?.toJS();
        const { input, pending } = login;
        
        if(input?.id === '' || input?.password === '' || pending) return;
        dispatch({ type : AUTH_TYPES.login, status : 'pending' });

        const { status, data } = await authApi.onLogin({ ...input });
        
        if(status === 200){
            const { accessToken } = data;
            const { user } = getJwtDecode(accessToken);
            
            dispatch({ type : USER_TYPES.setToken, payload : accessToken });
            dispatch({ type : USER_TYPES.setUser, payload : user });
            dispatch({ type : AUTH_TYPES.login, status : 'done', data });
        }else{
            dispatch({ type : AUTH_TYPES.login, status : 'error', error : {status, data }});
        }
    }
}

export const onRegister = () => {
    return async(dispatch, getState) => {
        const { register } = getState().auth?.toJS();
        const { input, pending } = register;
        
        if(input?.id === '' || input?.password === '' || input?.name || pending){
            return;
        }
        dispatch({ type : AUTH_TYPES.register, status : 'pending'});
        
        const { status, data } = await authApi.onRegister({ ...input });
        if(status === 204){
            dispatch({ type : AUTH_TYPES.register, status : 'done' });
        }else{
            dispatch({ type : AUTH_TYPES.register, status : 'error', error : { status, data }});
        }
    }
}

export const onSocial = (type) => {
    return async(dispatch, getState) => {
        const { social } = getState().auth?.toJS();
        const { pending } = social;

        if(pending) return;

        dispatch({ type : AUTH_TYPES.social, status : 'pending' });
        
        const { status, data } = await authApi.onSocial(type);
        console.log(status, data);
        if(status === 302){
            dispatch({ type : AUTH_TYPES.social, status : 'done', data });
        }else{
            dispatch({ type : AUTH_TYPES.social, status : 'error', error : { status, data }});
        }
    }
}

export default handleActions({
    [AUTH_TYPES.setLoginInput]: (state, action) => {
        const { name, value } = action.payload;
        return state.setIn(['login', 'input', name], value);
    },
    [AUTH_TYPES.setRegisterInput]: (state, action) => {
        const { name, value } = action.payload;
        return state.setIn(['register', 'input', name], value);
    },
    [AUTH_TYPES.login]: (state, action) => {
        const { status, data, error } = action;
        switch(status){
            case 'pending':
                return state.set('login', state.get('login').merge(Map({
                    pending : true,
                    done : false,
                    error : null
                })));
            case 'done':
                return state.set('login', state.get('login').merge(Map({
                    pending : false,
                    done : true,
                    error : null
                })));
            case 'error':
                return state.set('login', state.get('login').merge(Map({
                    pending : false,
                    done : false,
                    error
                })));
            default:
                return state;
        }
    },
    [AUTH_TYPES.register]: (state, action) => {
        const { status, error } = action;
        switch(status){
            case 'pending':
                return state;
            case 'done':
                return state;
            case 'error':
                return state;
            default:
                return state;
        }
    },
    [AUTH_TYPES.social]: (state, action) => {
        const { status, data, error } = action;

        switch(status){
            case 'pending':
                return state.set('social', state.get('social').merge(Map({
                    pending : true,
                    done : false,
                    error : null
                })));
            case 'done':
                const { accessToken } = data;
                return state.set('social', state.get('social').merge(Map({
                    pending : false,
                    done : true,
                    error : null
                })));
            case 'error':
                return state.set('social', state.get('social').merge(Map({
                    pending : false,
                    done : false,
                    error
                })))
        }
    }
}, initialState);