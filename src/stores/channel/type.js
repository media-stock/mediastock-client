import { initialFetchType } from 'lib';

export const CHANNEL_TYPES = {
    SET_PAGE: 'channel/SET_PAGE',
    SET_STATE: 'channel/SET_STATE',
    SET_RESET: 'channel/SET_RESET',

    ...initialFetchType('GET_CHANNELS', 'channel/GET_CHANNELS'),
    ...initialFetchType('GET_CHANNEL', 'channel/GET_CHANNEL'),
    ...initialFetchType('GET_CHANNEL_VIDEOS', 'channel/GET_CHANNEL_VIDEOS'),
    ...initialFetchType('GET_CHANNEL_STATISTICS', 'channel/GET_CHANNEL_STATISTICS'),
    ...initialFetchType('GET_MY_CHANNEL', 'channel/GET_MY_CHANNEL'),
};
