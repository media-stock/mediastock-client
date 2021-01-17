import { handleActions } from 'redux-actions';
import { MARKET_TYPES } from 'stores/market/type';
import { marketState } from 'stores/market/state';

import { createPromiseThunk, createFetchState, setImmutableState } from 'lib';
import * as marketAPI from 'services/market';

export const onGetMarkets = createPromiseThunk(MARKET_TYPES.GET_MARKETS, marketAPI.onGetMarkets);

export default handleActions(
    {
        [MARKET_TYPES.GET_MARKETS]: (state, _) =>
            setImmutableState(state, 'markets', createFetchState.pending()),
        [MARKET_TYPES.GET_MARKETS_DONE]: (state, action) =>
            setImmutableState(state, 'markets', createFetchState.done(action.payload?.channels)),
        [MARKET_TYPES.GET_MARKETS_ERROR]: (state, action) =>
            setImmutableState(state, 'markets', createFetchState.error(action.payloa)),
    },
    marketState,
);
