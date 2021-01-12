import { Map } from 'immutable';
import { initialFetchState } from 'lib';

export const articleState = Map({
    articles: initialFetchState.list,
    article: initialFetchState.object,
    create: initialFetchState.object,
    delete: initialFetchState.object,
    update: initialFetchState.object,
    createComment: initialFetchState.object,
});
