import { Map } from 'immutable';
import { initialFetchState } from 'lib';

export const stockState = Map({
    ipos: initialFetchState.list,
    ipo: initialFetchState.object,
});
