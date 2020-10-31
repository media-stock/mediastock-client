import { Map } from 'immutable';
// import { initialDataState } from '../state';

export const userState = Map({
    logined: Map({
        user: null,
        accessToken: null,
    }),
});
