import { handleActions } from 'redux-actions';
import { channelState } from 'stores/channel/state';
import { CHANNEL_TYPES } from 'stores/channel/type';

import {
    createPromiseThunk,
    createFetchState,
    setImmutableState,
    getDataPageAndOffset,
    getAccessTokenFromState,
    onSetPageDispatch,
    onSetStateDispatch,
    TYPE_PAGE,
    TYPE_STATE,
    setPageState,
    setInitialState,
} from 'lib';
import * as channelAPI from 'services/channel';

export const onGetChannels = createPromiseThunk(
    CHANNEL_TYPES.GET_CHANNELS,
    channelAPI.onGetChannels,
    (props) => getDataPageAndOffset(props)('channel', 'channels'),
);

export const onGetChannel = createPromiseThunk(CHANNEL_TYPES.GET_CHANNEL, channelAPI.onGetChannel);

export const onGetChannelVideos = createPromiseThunk(
    CHANNEL_TYPES.GET_CHANNEL_VIDEOS,
    channelAPI.onGetChannelVideos,
    (props) => getDataPageAndOffset(props)('channel', 'channelVideos'),
);

export const onGetChannelStatistics = createPromiseThunk(
    CHANNEL_TYPES.GET_CHANNEL_STATISTICS,
    channelAPI.onGetChannelStatistics,
    (props) => getDataPageAndOffset(props)('channel', 'channelStatistics'),
);

export const onGetMyChannels = createPromiseThunk(
    CHANNEL_TYPES.GET_MY_CHANNEL,
    channelAPI.onGetMyChannels,
    getAccessTokenFromState,
    (props) => getDataPageAndOffset(props)('channel', 'myChannels'),
);

export default handleActions(
    {
        [CHANNEL_TYPES.GET_CHANNELS]: (state, _) =>
            setImmutableState(state, 'channels', createFetchState.pending()),
        [CHANNEL_TYPES.GET_CHANNELS_DONE]: (state, action) =>
            setImmutableState(
                state,
                'channels',
                createFetchState.done(action.payload?.channels, action.payload?.totalCount),
            ),
        [CHANNEL_TYPES.GET_CHANNELS_ERROR]: (state, action) =>
            setImmutableState(state, 'channels', createFetchState.error(action.payload)),
        [CHANNEL_TYPES.GET_CHANNEL]: (state, _) =>
            setImmutableState(state, 'channel', createFetchState.pending()),
        [CHANNEL_TYPES.GET_CHANNEL_DONE]: (state, action) =>
            setImmutableState(state, 'channel', createFetchState.done()),
        [CHANNEL_TYPES.GET_CHANNEL_ERROR]: (state, action) =>
            setImmutableState(state, 'channel', createFetchState.error(action.payload)),
        [CHANNEL_TYPES.GET_CHANNEL_VIDEOS]: (state, _) =>
            setImmutableState(state, 'channelVideos', createFetchState.pending()),
        [CHANNEL_TYPES.GET_CHANNEL_VIDEOS_DONE]: (state, action) =>
            setImmutableState(
                state,
                'channelVideos',
                createFetchState.done(action.payload?.videos, action.payload?.totalCount),
            ),
        [CHANNEL_TYPES.GET_CHANNEL_VIDEOS_ERROR]: (state, action) =>
            setImmutableState(state, 'channelVideos', createFetchState.error(action.payload)),
        [CHANNEL_TYPES.GET_CHANNEL_STATISTICS]: (state, action) =>
            setImmutableState(state, 'channelStatistics', createFetchState.pending()),
        [CHANNEL_TYPES.GET_CHANNEL_STATISTICS_DONE]: (state, action) =>
            setImmutableState(state, 'channelStatistics', createFetchState.done()),
        [CHANNEL_TYPES.GET_CHANNEL_STATISTICS_ERROR]: (state, action) =>
            setImmutableState(state, 'channelStatistics', createFetchState.error(action.payload)),
        [CHANNEL_TYPES.GET_MY_CHANNEL]: (state, action) =>
            setImmutableState(state, 'myChannels', createFetchState.pending()),
        [CHANNEL_TYPES.GET_MY_CHANNEL_DONE]: (state, action) =>
            setImmutableState(state, 'myChannels', createFetchState.done(action.payload)),
        [CHANNEL_TYPES.GET_MY_CHANNEL]: (state, action) =>
            setImmutableState(state, 'myChannels', createFetchState.error(action.payload)),
    },
    channelState,
);
