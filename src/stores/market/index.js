import { handleActions } from 'redux-actions';
import { MARKET_TYPES } from 'stores/market/type';
import { marketState } from 'stores/market/state';

import { createPromiseThunk, createFetchState, setImmutableState } from 'lib';
import * as marketAPI from 'services/market';

export const onGetMarkets = createPromiseThunk(MARKET_TYPES.GET_MARKETS, marketAPI.onGetMarkets);
export const onGetMarket = createPromiseThunk(MARKET_TYPES.GET_MARKET, marketAPI.onGetMarket);
export const onGetMarketStockOrders = createPromiseThunk(
    MARKET_TYPES.GET_MARKET_STOCK_ORDERS,
    marketAPI.onGetMarketStockOrders,
);

export default handleActions(
    {
        [MARKET_TYPES.GET_MARKETS]: (state, _) =>
            setImmutableState(state, 'markets', createFetchState.pending()),
        [MARKET_TYPES.GET_MARKETS_DONE]: (state, action) =>
            setImmutableState(state, 'markets', createFetchState.done(action.payload?.channels)),
        [MARKET_TYPES.GET_MARKETS_ERROR]: (state, action) =>
            setImmutableState(state, 'markets', createFetchState.error(action.payloa)),
        [MARKET_TYPES.GET_MARKET]: (state, action) =>
            setImmutableState(state, 'market', createFetchState.pending()),
        [MARKET_TYPES.GET_MARKET_DONE]: (state, action) =>
            setImmutableState(state, 'market', createFetchState.done(action.payload?.channel)),
        [MARKET_TYPES.GET_MARKET_ERROR]: (state, action) =>
            setImmutableState(state, 'market', createFetchState.error(action.payload)),
        [MARKET_TYPES.GET_MARKET_STOCK_ORDERS]: (state, action) =>
            setImmutableState(state, 'marketStockOrders', createFetchState.pending()),
        [MARKET_TYPES.GET_MARKET_STOCK_ORDERS_DONE]: (state, action) =>
            setImmutableState(state, 'marketStockOrders', createFetchState.done(action.payload)),
        [MARKET_TYPES.GET_MARKET_STOCK_ORDERS_ERROR]: (state, action) =>
            setImmutableState(state, 'marketStockOrders', createFetchState.error(action.payload)),
    },
    marketState,
);
