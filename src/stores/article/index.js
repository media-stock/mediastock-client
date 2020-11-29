import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

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

export const setState = createAction(ARTICLE_TYPES.SET_STATE);
export const setPage = createAction(ARTICLE_TYPES.SET_PAGE);

export const onResetArticleState = ({ dispatch, data }) => {
    dispatch({ type: ARTICLE_TYPES.RESET });
};

export const onGetArticles = createPromiseThunk(
    ARTICLE_TYPES.GET_ARTICLES,
    articleAPI.onGetArticles,
    (getState) => getDataPageAndOffset(getState, 'article', 'articles'),
);

export const onGetArticle = createPromiseThunk(ARTICLE_TYPES.GET_ARTICLE, articleAPI.onGetArticle);

export const onCreateArticle = createPromiseThunk(
    ARTICLE_TYPES.CREATE_ARTICLE,
    articleAPI.onCreateArticle,
    getAccessTokenFromState,
    { after: [onResetArticleState] },
);

export default handleActions(
    {
        [ARTICLE_TYPES.RESET]: (state, action) => {
            return state
                .set('create', articleState.get('create'))
                .set('update', articleState.get('update'))
                .set('delete', articleState.get('delete'));
        },
        [ARTICLE_TYPES.SET_STATE]: (state, action) => {
            return fromJS(action.payload);
        },
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
        [ARTICLE_TYPES.CREATE_ARTICLE]: (state, action) => {
            const pendingState = createPromiseState.pending();
            return setImmutableState(state, 'create', pendingState);
        },
        [ARTICLE_TYPES.CREATE_ARTICLE_DONE]: (state, action) => {
            const doneState = createPromiseState.done(action.payload);
            return setImmutableState(state, 'create', doneState);
        },
        [ARTICLE_TYPES.CREATE_ARTICLE_ERROR]: (state, action) => {
            const errorState = createPromiseState.error(action.payload);
            return setImmutableState(state, 'create', errorState);
        },
    },
    articleState,
);
