import { Map } from 'immutable';
import { initialDataState } from '../utils';

export const articleState = Map({
    articles: initialDataState.list,
    article: initialDataState.object,
    createArticle: initialDataState.object,
    deleteArticle: initialDataState.object,
    updateArticle: initialDataState.object,
});
