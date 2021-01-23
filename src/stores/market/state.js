import { Map } from 'immutable';
import { initialFetchState } from 'lib';

export const marketState = Map({
    markets: initialFetchState.list,
    market: initialFetchState.object,
});
