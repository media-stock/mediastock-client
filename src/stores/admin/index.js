import { handleActions } from 'redux-actions';
import { ADMIN_TYPES } from './type';
import { adminState } from './state';

import {
    createPromiseThunk,
    createFetchState,
    setImmutableState,
    getPageAndOffset,
    getAccessTokenFromState,
    onSetPageDispatch,
    setPageState,
} from 'lib';
import * as adminAPI from 'services/admin';

export const setPage = onSetPageDispatch('admin');

export const onGetChannels = createPromiseThunk(
    ADMIN_TYPES.GET_CHANNELS,
    adminAPI.onGetChannels,
    getAccessTokenFromState,
    getPageAndOffset('admin', 'channels'),
);
export const onGetChannel = createPromiseThunk(
    ADMIN_TYPES.GET_CHANNEL,
    adminAPI.onGetChannel,
    getAccessTokenFromState,
);
export const onGetChannelVideos = createPromiseThunk(
    ADMIN_TYPES.GET_CHANNEL_VIDEOS,
    adminAPI.onGetChannelVideos,
    getAccessTokenFromState,
    getPageAndOffset('admin', 'channelVideos'),
);
export const onGetChannelStatistics = createPromiseThunk(
    ADMIN_TYPES.GET_CHANNEL_STATISTICS,
    adminAPI.onGetChannelStatistics,
    getAccessTokenFromState,
    getPageAndOffset('admin', 'channelStatistics'),
);

export default handleActions(
    {
        [ADMIN_TYPES.SET_PAGE]: setPageState,

        [ADMIN_TYPES.GET_CHANNELS]: (state, _) =>
            setImmutableState(state, 'channels', createFetchState.pending()),
        [ADMIN_TYPES.GET_CHANNELS_DONE]: (state, action) =>
            setImmutableState(
                state,
                'channels',
                createFetchState.done(action.payload?.channels, action.payload?.totalCount),
            ),
        [ADMIN_TYPES.GET_CHANNELS_ERROR]: (state, action) =>
            setImmutableState(state, 'channels', createFetchState.error(action.payload)),
        [ADMIN_TYPES.GET_CHANNEL]: (state, action) =>
            setImmutableState(state, 'channel', createFetchState.pending()),
        [ADMIN_TYPES.GET_CHANNEL_DONE]: (state, action) =>
            setImmutableState(state, 'channel', createFetchState.done(action.payload?.channel)),
        [ADMIN_TYPES.GET_CHANNEL_ERROR]: (state, action) =>
            setImmutableState(state, 'channel', createFetchState.error(action.payload)),
        [ADMIN_TYPES.GET_CHANNEL_VIDEOS]: (state, action) =>
            setImmutableState(state, 'channelVideos', createFetchState.pending()),
        [ADMIN_TYPES.GET_CHANNEL_VIDEOS_DONE]: (state, action) =>
            setImmutableState(
                state,
                'channelVideos',
                createFetchState.done(action.payload?.videos, action.payload?.totalCount),
            ),
        [ADMIN_TYPES.GET_CHANNEL_VIDEOS_ERROR]: (state, action) =>
            setImmutableState(state, 'channelVideos', createFetchState.error(action.payload)),
        [ADMIN_TYPES.GET_CHANNEL_STATISTICS]: (state, action) =>
            setImmutableState(state, 'channelStatistics', createFetchState.pending()),
        [ADMIN_TYPES.GET_CHANNEL_STATISTICS_DONE]: (state, action) =>
            setImmutableState(
                state,
                'channelStatistics',
                createFetchState.done(action.payload?.statistics),
            ),
        [ADMIN_TYPES.GET_CHANNEL_STATISTICS_ERROR]: (state, action) =>
            setImmutableState(state, 'channelStatistics', createFetchState.error(action.payload)),
    },
    adminState,
);
