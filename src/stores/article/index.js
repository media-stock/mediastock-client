import { handleActions } from 'redux-actions';
import { articleState } from './state';
import { ARTICLE_TYPES } from './type';

import {
    createPromiseThunk,
    createFetchState,
    setImmutableState,
    getPageAndOffset,
    getAccessTokenFromState,
    onSetPageDispatch,
    setPageState,
} from 'lib';
import * as articleAPI from 'services/article';

export const setPage = onSetPageDispatch('admin');

export const onGetArticles = createPromiseThunk(
    ARTICLE_TYPES.GET_ARTICLES,
    articleAPI.onGetArticles,
    getPageAndOffset('article', 'articles'),
);

export const onGetArticle = createPromiseThunk(ARTICLE_TYPES.GET_ARTICLE, articleAPI.onGetArticle);

export const onCreateArticle = createPromiseThunk(
    ARTICLE_TYPES.CREATE_ARTICLE,
    articleAPI.onCreateArticle,
    getAccessTokenFromState,
);

export const onUpdateArticle = createPromiseThunk(
    ARTICLE_TYPES.UPDATE_ARTICLE,
    articleAPI.onUpdateArticle,
    getAccessTokenFromState,
);

export const onCreateArticleComment = createPromiseThunk(
    ARTICLE_TYPES.CREATE_COMMENT,
    articleAPI.onCreateArticleComment,
    getAccessTokenFromState,
);

export default handleActions(
    {
        [ARTICLE_TYPES.SET_PAGE]: setPageState,

        [ARTICLE_TYPES.GET_ARTICLES]: (state, action) =>
            setImmutableState(state, 'articles', createFetchState.pending()),
        [ARTICLE_TYPES.GET_ARTICLES_DONE]: (state, action) =>
            setImmutableState(
                state,
                'articles',
                createFetchState.done(action.payload?.articles, action.payload?.totalCount),
            ),
        [ARTICLE_TYPES.GET_ARTILCES_ERROR]: (state, action) =>
            setImmutableState(state, 'articles', createFetchState.error(action.payload)),
        [ARTICLE_TYPES.GET_ARTICLE]: (state, action) =>
            setImmutableState(state, 'article', createFetchState.pending()),
        [ARTICLE_TYPES.GET_ARTICLE_DONE]: (state, action) =>
            setImmutableState(state, 'article', createFetchState.done(action.payload?.article)),
        [ARTICLE_TYPES.GET_ARTICLE_ERROR]: (state, action) =>
            setImmutableState(state, 'article', createFetchState.error(action.payload)),
        [ARTICLE_TYPES.CREATE_ARTICLE]: (state, action) =>
            setImmutableState(state, 'createArticle', createFetchState.pending()),
        [ARTICLE_TYPES.CREATE_ARTICLE_DONE]: (state, action) =>
            setImmutableState(state, 'createArticle', createFetchState.done()),
        [ARTICLE_TYPES.CREATE_ARTICLE_ERROR]: (state, action) =>
            setImmutableState(state, 'createArticle', createFetchState.error(action.payload)),
        [ARTICLE_TYPES.DELETE_ARTICLE]: (state, action) =>
            setImmutableState(state, 'deleteArticle', createFetchState.pending()),
        [ARTICLE_TYPES.DELETE_ARTICLE_DONE]: (state, action) =>
            setImmutableState(state, 'deleteArticle', createFetchState.done()),
        [ARTICLE_TYPES.DELETE_ARTICLE_ERROR]: (state, action) =>
            setImmutableState(state, 'deleteArticle', createFetchState.error(action.payload)),
        [ARTICLE_TYPES.UPDATE_ARTICLE]: (state, action) =>
            setImmutableState(state, 'updateArticle', createFetchState.pending()),
        [ARTICLE_TYPES.UPDATE_ARTICLE_DONE]: (state, action) =>
            setImmutableState(state, 'updateArticle', createFetchState.done()),
        [ARTICLE_TYPES.UPDATE_ARTICLE_ERROR]: (state, action) =>
            setImmutableState(state, 'updateArticle', createFetchState.error(action.payload)),
    },
    articleState,
);
