import { createAction, handleActions } from 'redux-actions';

import { articleState } from './state';
import { ARTICLE_TYPES } from './type';
import * as articleAPI from 'services/article';
import {
    createPromiseThunk,
    createPromiseState,
    setImmutableState,
    getDataPageAndOffset,
    getAccessTokenFromState,
} from '../redux';

export const setPage = createAction(ARTICLE_TYPES.SET_PAGE);

export const onGetArticles = createPromiseThunk(
    ARTICLE_TYPES.GET_ARTICLES,
    articleAPI.onGetArticles,
    (getState) => getDataPageAndOffset(getState, 'article', 'articles'),
);

export const onGetArticle = createPromiseThunk(ARTICLE_TYPES.GET_ARTICLE, articleAPI.onGetArticle);

export default handleActions(
    {
        [ARTICLE_TYPES.SET_PAGE]: (state, action) => {
            const { page, offset, type = 'articles' } = action.payload;

            let nextState = state;
            if (page >= 0) nextState = nextState.setIn([type, 'page'], page);
            if (offset >= 0) nextState = nextState.setIn([type, 'offset'], offset);

            return nextState;
        },
        [ARTICLE_TYPES.GET_ARTICLES]: (state, action) => {
            const pendingState = createPromiseState.pending();
            return setImmutableState(state, 'articles', pendingState);
        },
        [ARTICLE_TYPES.GET_ARTICLES_DONE]: (state, action) => {
            const doneState = createPromiseState.done(
                action.payload?.articles,
                action.payload?.totalCount,
            );
            return setImmutableState(state, 'articles', doneState);
        },
        [ARTICLE_TYPES.GET_ARTICLES_ERROR]: (state, action) => {
            const errorState = createPromiseState.error(action.payload);
            return setImmutableState(state, 'articles', errorState);
        },
        [ARTICLE_TYPES.GET_ARTICLE]: (state, action) => {
            const pendingState = createPromiseState.pending();
            return setImmutableState(state, 'article', pendingState);
        },
        [ARTICLE_TYPES.GET_ARTICLE_DONE]: (state, action) => {
            const doneState = createPromiseState.done(action.payload?.article);
            return setImmutableState(state, 'article', doneState);
        },
        [ARTICLE_TYPES.GET_ARTICLE_ERROR]: (state, action) => {
            const errorState = createPromiseState.error(action.payload);
            return setImmutableState(state, 'article', errorState);
        },
    },
    articleState,
);
