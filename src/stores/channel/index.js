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

export const onGetChannels = createPromiseThunk(
    CHANNEL_TYPES.GET_CHANNELS,
    channelAPI.onGetChannels,
    (getState) => getDataPageAndOffset(getState, 'channel', 'channels'),
);

export const onGetChannel = createPromiseThunk(CHANNEL_TYPES.GET_CHANNEL, channelAPI.onGetChannel);

export default handleActions(
    {
        [CHANNEL_TYPES.GET_CHANNELS]: (state, _) => {
            const pendingState = createPromiseState.pending();
            return setImmutableState(state, 'channels', pendingState);
        },
        [CHANNEL_TYPES.GET_CHANNELS_DONE]: (state, action) => {
            const beforeChannels = state.getIn(['channels', 'data']);
            const channels = action.payload?.channels;
            const totalCount = action.payload?.totalCount;

            let doneState = null;
            if (beforeChannels?.length > 0) {
                doneState = createPromiseState.more(beforeChannels, channels, totalCount);
            } else {
                doneState = createPromiseState.done(channels, totalCount);
            }
            return setImmutableState(state, 'channels', doneState);
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
            const doneState = createPromiseState.done(state, 'channel', action.payload?.channel);
            return setImmutableState(state, 'channel', doneState);
        },
        [CHANNEL_TYPES.GET_CHANNEL_ERROR]: (state, action) => {
            const errorState = createPromiseState.error(action?.payload);
            return setImmutableState(state, 'channel', errorState);
        },
    },
    channelState,
);
