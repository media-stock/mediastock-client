import { createAction, handleActions } from 'redux-actions';
import { stockState } from './state';
import { STOCK_TYPES } from './type';
import {
    createPromiseThunk,
    createPromiseState,
    setImmutableState,
    getDataPageAndOffset,
} from '../redux';
import * as stockAPI from 'services/stock';

export const setIPOsReset = createAction(STOCK_TYPES.SET_IPOS_RESET);
export const setIPOsPage = createAction(STOCK_TYPES.SET_IPOS_PAGE);

export const onGetIPOs = createPromiseThunk(STOCK_TYPES.GET_IPOS, stockAPI.onGetIPOs, (getState) =>
    getDataPageAndOffset(getState, 'stock', 'ipos'),
);
export const onGetIPO = createPromiseThunk(STOCK_TYPES.GET_IPO, stockAPI.onGetIPO);

export default handleActions(
    {
        [STOCK_TYPES.GET_IPOS]: (state, action) => {
            const pendingState = createPromiseState.pending();
            return setImmutableState(state, 'ipos', pendingState);
        },
        [STOCK_TYPES.GET_IPOS_DONE]: (state, action) => {
            return state
                .setIn(['ipos', 'pending'], false)
                .setIn(['ipos', 'error'], null)
                .setIn(
                    ['ipos', 'data'],
                    [...state.getIn(['ipos', 'data']), ...action.payload?.ipos],
                )
                .setIn(['ipos', 'dataCount'], action.payload?.totalCount);
        },
        [STOCK_TYPES.GET_IPOS_ERROR]: (state, action) => {
            const errorState = createPromiseState.error(action.payload);
            return setImmutableState(state, 'ipos', errorState);
        },
        [STOCK_TYPES.GET_IPO]: (state, action) => {
            const pendingState = createPromiseState.pending();
            return setImmutableState(state, 'ipo', pendingState);
        },
        [STOCK_TYPES.GET_IPO_DONE]: (state, action) => {
            const doneState = createPromiseState.done(action.payload?.ipo);
            return setImmutableState(state, 'ipo', doneState);
        },
        [STOCK_TYPES.GET_IPO_ERROR]: (state, action) => {
            const errorState = createPromiseState.error(action.payload);
            return setImmutableState(state, 'ipo', errorState);
        },
    },
    stockState,
);
