import { Map } from 'immutable';

const initialDataState = Map({
    pending: false,
    done: false,
    error: null,
    data: null,
});

export const authState = Map({
    login: initialDataState.merge(
        Map({
            input: Map({
                email: '',
                password: '',
            }),
        }),
    ),
    register: initialDataState.merge({
        input: Map({
            email: '',
            password: '',
            name: '',
        }),
    }),
    social: initialDataState,
});

export const userState = Map({
    user: null,
    accessToken: null,
});
