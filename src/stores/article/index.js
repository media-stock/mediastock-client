import { createAction, handleActions } from 'redux-actions';
import { articleState } from './state';
import { ARTICLE_TYPES } from './type';
import * as articleAPI from 'services/article';
import {
    createPromiseThunk,
    createPromiseState,
    createInitialState,
    setStateFromData,
    setStatePageAndOffset,
    setInitialState,
    setImmutableState,
    getDataPageAndOffset,
    getAccessTokenFromState,
} from '../redux';

export const setState = createAction(ARTICLE_TYPES.SET_STATE);

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
    { after: [(props) => setInitialState(props, ARTICLE_TYPES.SET_RESET, 'create')] },
);

// export const onDeleteArticle = createPromiseThunk(
//     ARTICLE_TYPES.DELETE_ARTICLE,
//     //
// )

export const onUpdateArticle = createPromiseThunk(
    ARTICLE_TYPES.UPDATE_ARTICLE,
    articleAPI.onUpdateArticle,
    getAccessTokenFromState,
    { after: [(props) => setInitialState(props, ARTICLE_TYPES.SET_RESET, 'update')] },
);

export const onCreateArticleComment = createPromiseThunk(
    ARTICLE_TYPES.CREATE_COMMENT,
    articleAPI.onCreateArticleComment,
    getAccessTokenFromState,
    { after: [(props) => setInitialState(props, ARTICLE_TYPES.SET_RESET, 'createComment')] },
);

export default handleActions(
    {
        [ARTICLE_TYPES.SET_STATE]: setStateFromData,
        [ARTICLE_TYPES.SET_PAGE]: setStatePageAndOffset,
        [ARTICLE_TYPES.SET_RESET]: (state, action) =>
            createInitialState(state, action, articleState),
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
        [ARTICLE_TYPES.UPDATE_ARTICLE]: (state, action) => {
            const pendingState = createPromiseState.pending();
            return setImmutableState(state, 'update', pendingState);
        },
        [ARTICLE_TYPES.UPDATE_ARTICLE_DONE]: (state, action) => {
            const doneState = createPromiseState.done({});
            return setImmutableState(state, 'update', doneState);
        },
        [ARTICLE_TYPES.UPDATE_ARTICLE_ERROR]: (state, action) => {
            const errorState = createPromiseState.error(action.payload);
            return setImmutableState(state, 'update', errorState);
        },
        [ARTICLE_TYPES.CREATE_COMMENT]: (state, action) => {
            const pendingState = createPromiseState.pending();
            return setImmutableState(state, 'createComment', pendingState);
        },
        [ARTICLE_TYPES.CREATE_COMMENT_DONE]: (state, action) => {
            const doneState = createPromiseState.done({});
            return setImmutableState(state, 'createComment', doneState);
        },
        [ARTICLE_TYPES.CREATE_ARTICLE_ERROR]: (state, action) => {
            const errorState = createPromiseState.error(action.payload);
            return setImmutableState(state, 'createComment', errorState);
        },
    },
    articleState,
);
