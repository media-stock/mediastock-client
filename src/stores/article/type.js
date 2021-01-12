import { initialFetchType } from 'lib';

export const ARTICLE_TYPES = {
    SET_STATE: 'aritcle/SET_STATE',
    SET_RESET: 'article/SET_RESET',
    SET_PAGE: 'article/SET_PAGE',

    ...initialFetchType('GET_ARTICLES', 'article/GET_ARTICLES'),
    ...initialFetchType('GET_ARTICLE', 'article/GET_ARTICLE'),
    ...initialFetchType('CREATE_ARTICLE', 'article/CREATE_ARTICLE'),
    ...initialFetchType('DELETE_ARTICLE', 'article/DELETE_ARTICLE'),
    ...initialFetchType('UPDATE_ARTICLE', 'article/UPDATE_ARTICLE'),
    ...initialFetchType('CREATE_COMMENT', 'article/CREATE_COMMENT'),
};
