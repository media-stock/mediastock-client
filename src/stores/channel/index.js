import { createAction, handleActions } from 'redux-actions';
import { channelState } from './state';
import { CHANNEL_TYPES } from './type';
import {
    createPromiseThunk,
    createPromiseState,
    setImmutableState,
    getDataPageAndOffset,
} from '../redux';
import * as channelAPI from 'services/channel';

export const setChannelsReset = createAction(CHANNEL_TYPES.SET_CHANNELS_RESET);
export const setChannelsPage = createAction(CHANNEL_TYPES.SET_CHANNELS_PAGE);

export const onGetChannels = createPromiseThunk(
    CHANNEL_TYPES.GET_CHANNELS,
    channelAPI.onGetChannels,
    (getState) => getDataPageAndOffset(getState, 'channel', 'channels'),
);

export const onGetChannel = createPromiseThunk(CHANNEL_TYPES.GET_CHANNEL, channelAPI.onGetChannel);

export default handleActions(
    {
        [CHANNEL_TYPES.SET_CHANNELS_RESET]: (state, action) => {
            return state.setIn(['channels', 'data'], []);
        },
        [CHANNEL_TYPES.SET_CHANNELS_PAGE]: (state, action) => {
            const offset = action.payload?.offset;
            const limit = action.payload?.limit;

            if (limit) {
                return state.setIn(['channels', 'offset'], 0).setIn(['channels', 'limit'], limit);
            }
            if (offset) {
                return state.setIn(['channels', 'offset'], offset);
            }

            return state;
        },
        [CHANNEL_TYPES.GET_CHANNELS]: (state, _) => {
            const pendingState = createPromiseState.pending();
            return setImmutableState(state, 'channels', pendingState);
        },
        [CHANNEL_TYPES.GET_CHANNELS_DONE]: (state, action) => {
            return state
                .setIn(['channels', 'pending'], false)
                .setIn(['channels', 'error'], null)
                .setIn(
                    ['channels', 'data'],
                    [...state.getIn(['channels', 'data']), ...action.payload?.channels],
                )
                .setIn(['channels', 'dataCount'], action.payload?.totalCount);
        },
        [CHANNEL_TYPES.GET_CHANNELS_ERROR]: (state, action) => {
            const errorState = createPromiseState.error(action?.payload);
            return setImmutableState(state, 'channels', errorState);
        },
        [CHANNEL_TYPES.GET_CHANNEL]: (state, _) => {
            const pendingState = createPromiseState.pending();
            return setImmutableState(state, 'channel', pendingState);
        },
        [CHANNEL_TYPES.GET_CHANNEL_DONE]: (state, action) => {
            const doneState = createPromiseState.done(action.payload?.channel);
            return setImmutableState(state, 'channel', doneState);
        },
        [CHANNEL_TYPES.GET_CHANNEL_ERROR]: (state, action) => {
            const errorState = createPromiseState.error(action?.payload);
            return setImmutableState(state, 'channel', errorState);
        },
    },
    channelState,
);
