import { Map } from 'immutable';
import { initialDataState } from '../state';

export const authState = Map({
    login: initialDataState.object,
    register: initialDataState.object,
});
