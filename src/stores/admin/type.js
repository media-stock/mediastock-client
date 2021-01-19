import { initialFetchType } from 'lib';

export const ADMIN_TYPES = {
    SET_PAGE: 'admin/SET_PAGE',

    ...initialFetchType('GET_CHANNELS', 'admin/GET_CHANNELS'),
    ...initialFetchType('GET_CHANNEL', 'admin/GET_CHANNEL'),
    ...initialFetchType('GET_CHANNEL_VIDEOS', 'admin/GET_CHANNEL_VIDEOS'),
    ...initialFetchType('GET_CHANNEL_STATISTICS', 'admin/GET_CHANNEL_STATISTICS'),

    ...initialFetchType('GET_ARTICLES', 'admin/GET_ARTICLES'),
    ...initialFetchType('GET_ARTICLE', 'admin/GET_ARTICLE'),
    ...initialFetchType('CREATE_ARTICLE', 'admin/CREATE_ARTICLE'),
    ...initialFetchType('DELETE_ARTICLE', 'admin/DELETE_ARTICLE'),
    ...initialFetchType('UPDATE_ARTICLE', 'admin/UPDATE_ARTICLE'),
};
