import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { AUTH_TYPES } from './types';

import * as authApi from 'lib/api';

const initialState = Map({
    login : Map({
        input : {
            id : '',
            password : ''
        },
        pending : false,
        done : false,
        error : null
    }),
    register : Map({
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
            dispatch({ type : AUTH_TYPES.login, status : 'done', data });
        }else{
            dispatch({ type : AUTH_TYPES.login, status : 'error', error : {status, data }});
        }
    }
}

export const onRegister = () => {
    return async(dispatch, getState) => {
        
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
                return state;
            case 'done':
                return state;
            case 'error':
                return state;
            default:
                return state;
        }
    },
    [AUTH_TYPES.register]: (state, action) => {
        
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