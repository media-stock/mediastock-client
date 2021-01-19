import { initialFetchType } from 'lib';

export const ADMIN_TYPES = {
    ...initialFetchType('GET_CHANNELS', 'admin/GET_CHANNELS'),
    ...initialFetchType('GET_CHANNEL', 'admin/GET_CHANNEL'),
};
