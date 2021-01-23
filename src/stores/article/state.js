import { Map } from 'immutable';
import { initialFetchState } from 'lib';

export const articleState = Map({
    articles: initialFetchState.list,
    article: initialFetchState.object,
    createArticle: initialFetchState.object,
    deleteArticle: initialFetchState.object,
    updateArticle: initialFetchState.object,
    createComment: initialFetchState.object,
});
