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

// init
export const setPage = onSetPageDispatch('admin');

// channel
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

// article
export const onGetArticles = createPromiseThunk(
    ADMIN_TYPES.GET_ARTICLES,
    adminAPI.onGetArticles,
    getAccessTokenFromState,
    getPageAndOffset('admin', 'articles'),
);
export const onGetArticle = createPromiseThunk(
    ADMIN_TYPES.GET_ARTICLE,
    adminAPI.onGetArticle,
    getAccessTokenFromState,
);
export const onCreateArticle = createPromiseThunk(
    ADMIN_TYPES.CREATE_ARTICLE,
    adminAPI.onCreateArticle,
    getAccessTokenFromState,
);
export const onDeleteArticle = createPromiseThunk(
    ADMIN_TYPES.DELETE_ARTICLE,
    adminAPI.onDeleteArticle,
    getAccessTokenFromState,
);
export const onUpdateArticle = createPromiseThunk(
    ADMIN_TYPES.UPDATE_ARTICLE,
    adminAPI.onUpdateArticle,
    getAccessTokenFromState,
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

        // article
        [ADMIN_TYPES.GET_ARTICLES]: (state, action) =>
            setImmutableState(state, 'articles', createFetchState.pending()),
        [ADMIN_TYPES.GET_ARTICLES_DONE]: (state, action) =>
            setImmutableState(
                state,
                'articles',
                createFetchState.done(action.payload?.articles, action.payload?.totalCount),
            ),
        [ADMIN_TYPES.GET_ARTILCES_ERROR]: (state, action) =>
            setImmutableState(state, 'articles', createFetchState.error(action.payload)),
        [ADMIN_TYPES.GET_ARTICLE]: (state, action) =>
            setImmutableState(state, 'article', createFetchState.pending()),
        [ADMIN_TYPES.GET_ARTICLE_DONE]: (state, action) =>
            setImmutableState(state, 'article', createFetchState.done(action.payload?.article)),
        [ADMIN_TYPES.GET_ARTICLE_ERROR]: (state, action) =>
            setImmutableState(state, 'article', createFetchState.error(action.payload)),
        [ADMIN_TYPES.CREATE_ARTICLE]: (state, action) =>
            setImmutableState(state, 'createArticle', createFetchState.pending()),
        [ADMIN_TYPES.CREATE_ARTICLE_DONE]: (state, action) =>
            setImmutableState(state, 'createArticle', createFetchState.done()),
        [ADMIN_TYPES.CREATE_ARTICLE_ERROR]: (state, action) =>
            setImmutableState(state, 'createArticle', createFetchState.error(action.payload)),
        [ADMIN_TYPES.DELETE_ARTICLE]: (state, action) =>
            setImmutableState(state, 'deleteArticle', createFetchState.pending()),
        [ADMIN_TYPES.DELETE_ARTICLE_DONE]: (state, action) =>
            setImmutableState(state, 'deleteArticle', createFetchState.done()),
        [ADMIN_TYPES.DELETE_ARTICLE_ERROR]: (state, action) =>
            setImmutableState(state, 'deleteArticle', createFetchState.error(action.payload)),
        [ADMIN_TYPES.UPDATE_ARTICLE]: (state, action) =>
            setImmutableState(state, 'updateArticle', createFetchState.pending()),
        [ADMIN_TYPES.UPDATE_ARTICLE_DONE]: (state, action) =>
            setImmutableState(state, 'updateArticle', createFetchState.done()),
        [ADMIN_TYPES.UPDATE_ARTICLE_ERROR]: (state, action) =>
            setImmutableState(state, 'updateArticle', createFetchState.error(action.payload)),
    },
    adminState,
);
