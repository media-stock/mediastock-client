import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { fromJS } from 'immutable';

import login from './login';
import register from './register';
import user from './user';

const combinedReducers = combineReducers({
    login,
    register,
    user
});

const reducers = (state, action) => {
    if (action?.type === HYDRATE) {
        // console.log(state);
        // console.log(action.payload.tag.toJS());
        for (const [key, value] of Object.entries(action.payload)) {
            state[key] = value;
        }
        return combinedReducers(state, action);
    }

    return combinedReducers(state, action);
}

export const serializeState = (state) => {
    const serialized = [];
    for (const [key, value] of Object.entries(state)) {
        serialized[key] = value ? value.toJS() : value;
    }

    return serialized;
}

export const deserializeState = (state) => {
    const deserialized = [];
    for (const [key, value] of Object.entries(state)) {
        deserialized[key] = value ? fromJS(value) : value;
    }

    return deserialized;
}


export default reducers;