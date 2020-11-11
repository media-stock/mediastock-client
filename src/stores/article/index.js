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

export const setArticleReset = createAction(ARTICLE_TYPES.SET_ARTICLES_RESET);
export const setArticlePage = createAction(ARTICLE_TYPES.SET_ARTICLES_PAGE);

export const onGetArticles = createPromiseThunk(
    ARTICLE_TYPES.GET_ARTICLES,
    articleAPI.onGetArticles,
    (getState) => getDataPageAndOffset(getState, 'article', 'articles'),
);
export const onGetArticle = createPromiseThunk(ARTICLE_TYPES.GET_ARTICLE, articleAPI.onGetArticle);

export default handleActions(
    {
        [ARTICLE_TYPES.SET_ARTICLES_RESET]: (state, _) => {
            return state.setIn(['articles', 'data'], []);
        },
        [ARTICLE_TYPES.SET_ARTICLES_PAGE]: (state, action) => {
            const offset = action.payload?.offset;
            const limit = action.payload?.limit;

            if (limit) {
                return state.setIn(['articles', 'offset'], 0).setIn(['articles', 'limit'], limit);
            }
            if (offset) {
                return state.setIn(['articles', 'offset'], offset);
            }

            return state;
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
