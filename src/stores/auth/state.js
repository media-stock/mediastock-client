import { Map } from 'immutable';
import { initialFetchState } from 'lib';

export const authState = Map({
    login: initialFetchState.object,
    register: initialFetchState.object,
});
