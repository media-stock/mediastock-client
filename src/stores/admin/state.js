import { Map } from 'immutable';
import { initialFetchState } from 'lib';

export const adminState = Map({
    channels: initialFetchState.list,
    channel: initialFetchState.object,
    channelVideos: initialFetchState.list,
    channelStatistics: initialFetchState.list,

    articles: initialFetchState.list,
    article: initialFetchState.object,
    createArticle: initialFetchState.object,
    deleteArticle: initialFetchState.object,
    updateArticle: initialFetchState.object,
});
