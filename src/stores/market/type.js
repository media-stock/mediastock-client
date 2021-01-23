import { initialFetchType } from 'lib';

export const MARKET_TYPES = {
    SET_STATE: 'market/SET_STATE',

    ...initialFetchType('GET_MARKETS', 'market/GET_MARKTETS'),
    ...initialFetchType('GET_MARKET', 'market/GET_MARKTET'),
};
