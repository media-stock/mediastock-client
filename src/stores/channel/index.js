import { createAction, handleActions } from 'redux-actions';
import { channelState } from './state';
import { CHANNEL_TYPES } from './type';
import {
    createPromiseThunk,
    createPromiseState,
    createInitialState,
    setStateFromData,
    setStatePageAndOffset,
    setInitialState,
    setImmutableState,
    getDataPageAndOffset,
    getAccessTokenFromState,
} from '../redux';
import * as channelAPI from 'services/channel';

export const setState = createAction(CHANNEL_TYPES.SET_STATE);
export const setPage = createAction(CHANNEL_TYPES.SET_PAGE);

export const onGetChannels = createPromiseThunk(
    CHANNEL_TYPES.GET_CHANNELS,
    channelAPI.onGetChannels,
    (getState) => getDataPageAndOffset(getState, 'channel', 'channels'),
);

export const onGetChannel = createPromiseThunk(CHANNEL_TYPES.GET_CHANNEL, channelAPI.onGetChannel);

export const onGetChannelVideos = createPromiseThunk(
    CHANNEL_TYPES.GET_CHANNEL_VIDEOS,
    channelAPI.onGetChannelVideos,
    (getState) => getDataPageAndOffset(getState, 'channel', 'channelVideos'),
);

export const onGetChannelStatistics = createPromiseThunk(
    CHANNEL_TYPES.GET_CHANNEL_STATISTICS,
    channelAPI.onGetChannelStatistics,
    (getState) => getDataPageAndOffset(getState, 'channel', 'channelStatistics'),
);

export const onGetMyChannels = createPromiseThunk(
    CHANNEL_TYPES.GET_MY_CHANNEL,
    channelAPI.onGetMyChannels,
    getAccessTokenFromState,
    (getState) => getDataPageAndOffset(getState, 'channel', 'myChannels'),
);

export default handleActions(
    {
        [CHANNEL_TYPES.SET_STATE]: setStateFromData,
        [CHANNEL_TYPES.SET_PAGE]: setStatePageAndOffset,
        [CHANNEL_TYPES.SET_RESET]: (state, action) =>
            createInitialState(state, action, channelState),

        [CHANNEL_TYPES.GET_CHANNELS]: (state, _) => {
            const pendingState = createPromiseState.pending();
            return setImmutableState(state, 'channels', pendingState);
        },
        [CHANNEL_TYPES.GET_CHANNELS_DONE]: (state, action) => {
            const doneState = createPromiseState.done(
                action.payload?.channels,
                action.payload?.totalCount,
            );
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
            const doneState = createPromiseState.done(action.payload?.channel);
            return setImmutableState(state, 'channel', doneState);
        },
        [CHANNEL_TYPES.GET_CHANNEL_ERROR]: (state, action) => {
            const errorState = createPromiseState.error(action?.payload);
            return setImmutableState(state, 'channel', errorState);
        },
        [CHANNEL_TYPES.GET_CHANNEL_VIDEOS]: (state, _) => {
            const pendingState = createPromiseState.pending();
            return setImmutableState(state, 'channelVideos', pendingState);
        },
        [CHANNEL_TYPES.GET_CHANNEL_VIDEOS_DONE]: (state, action) => {
            const { totalCount, videos } = action.payload;

            const doneState = createPromiseState.done(videos, totalCount);
            return setImmutableState(state, 'channelVideos', doneState);
        },
        [CHANNEL_TYPES.GET_CHANNEL_VIDEOS_ERROR]: (state, action) => {
            const errorState = createPromiseState.error(action?.payload);
            return setImmutableState(state, 'channelVideos', errorState);
        },
        [CHANNEL_TYPES.GET_CHANNEL_STATISTICS]: (state, action) => {
            const pendingState = createPromiseState.pending();
            return setImmutableState(state, 'channelStatistics', pendingState);
        },
        [CHANNEL_TYPES.GET_CHANNEL_STATISTICS_DONE]: (state, action) => {
            const { statistics } = action.payload;

            return state
                .setIn(['channelStatistics', 'pending'], false)
                .setIn(['channelStatistics', 'error'], null)
                .setIn(['channelStatistics', 'dataCount'], statistics?.length)
                .setIn(['channelStatistics', 'data'], statistics);
        },
        [CHANNEL_TYPES.GET_CHANNEL_STATISTICS_ERROR]: (state, action) => {
            const errorState = createPromiseState.error(action.payload);
            return setImmutableState(state, 'channelStatistics', errorState);
        },
        [CHANNEL_TYPES.GET_MY_CHANNEL]: (state, action) => {
            const pendingState = createPromiseState.pending();
            return setImmutableState(state, 'myChannels', pendingState);
        },
        [CHANNEL_TYPES.GET_MY_CHANNEL_DONE]: (state, action) => {
            const doneState = createPromiseState.done([]);
            return setImmutableState(state, 'myChannels', doneState);
        },
        [CHANNEL_TYPES.GET_MY_CHANNEL]: (state, action) => {
            const errorState = createPromiseState.error(action.payload);
            return setImmutableState(state, 'myChannels', errorState);
        },
    },
    channelState,
);
