import { Map } from 'immutable';
import { initialDataState } from '../utils';

export const articleState = Map({
    articles: initialDataState.list,
    article: initialDataState.object,
    create: initialDataState.object,
    delete: initialDataState.object,
    update: initialDataState.object,
    createComment: initialDataState.object,
});
