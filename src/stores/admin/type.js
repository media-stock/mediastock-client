import { initialFetchType } from 'lib';

export const ADMIN_TYPES = {
    SET_PAGE: 'admin/SET_PAGE',

    ...initialFetchType('GET_CHANNELS', 'admin/GET_CHANNELS'),
    ...initialFetchType('GET_CHANNEL', 'admin/GET_CHANNEL'),
    ...initialFetchType('GET_CHANNEL_VIDEOS', 'admin/GET_CHANNEL_VIDEOS'),
    ...initialFetchType('GET_CHANNEL_STATISTICS', 'admin/GET_CHANNEL_STATISTICS'),
};
