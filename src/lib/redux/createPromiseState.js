import { Map } from 'immutable';

export const createPromiseState = {
    pending: () =>
        Map({
            pending: true,
            done: false,
            error: null,
        }),
    done: (payload) =>
        Map({
            pending: false,
            done: false,
            error: null,
            data: payload,
        }),
    error: (payload) =>
        Map({
            pending: false,
            done: false,
            error: payload,
        }),
};
