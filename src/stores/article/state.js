import { Map } from 'immutable';
import { initialDataState } from '../state';

export const articleState = Map({
    articles: initialDataState.list,
    article: initialDataState.object,
    createArticle: initialDataState.object,
    deleteArticle: initialDataState.object,
    updateArticle: initialDataState.object,
});
