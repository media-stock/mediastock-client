import { handleActions } from 'redux-actions';
import { stockState } from './state';
import { STOCK_TYPES } from './type';
import {
    createPromiseThunk,
    createFetchState,
    setImmutableState,
    getDataPageAndOffset,
    onSetPageDispatch,
    onSetStateDispatch,
    TYPE_PAGE,
    TYPE_STATE,
    setPageState,
    setInitialState,
} from 'lib';
import * as stockAPI from 'services/stock';

export const setPage = onSetPageDispatch('stock');
export const setState = onSetStateDispatch('stock');

export const onGetIPOs = createPromiseThunk(STOCK_TYPES.GET_IPOS, stockAPI.onGetIPOs, (getState) =>
    getDataPageAndOffset(getState)('stock', 'ipos'),
);
export const onGetIPO = createPromiseThunk(STOCK_TYPES.GET_IPO, stockAPI.onGetIPO);

export default handleActions(
    {
        [TYPE_PAGE('stock')]: setPageState,
        [TYPE_STATE('stock')]: (...props) => setInitialState(...props, stockState),
        [STOCK_TYPES.GET_IPOS]: (state, action) =>
            setImmutableState(state, 'ipos', createFetchState.pending()),
        [STOCK_TYPES.GET_IPOS_DONE]: (state, action) =>
            setImmutableState(
                state,
                'ipos',
                createFetchState.done(action.payload?.ipos, action.payload?.totalCount),
            ),
        [STOCK_TYPES.GET_IPOS_ERROR]: (state, action) =>
            setImmutableState(state, 'ipos', createFetchState.error(action.payload)),
        [STOCK_TYPES.GET_IPO]: (state, action) =>
            setImmutableState(state, 'ipo', createFetchState.pending()),
        [STOCK_TYPES.GET_IPO_DONE]: (state, action) =>
            setImmutableState(state, 'ipo', action.payload?.ipo),
        [STOCK_TYPES.GET_IPO_ERROR]: (state, action) =>
            setImmutableState(state, 'ipo', createFetchState.error(action.payload)),
    },
    stockState,
);
