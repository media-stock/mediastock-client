import { initialFetchType } from 'lib';

export const MARKET_TYPES = {
    SET_STATE: 'market/SET_STATE',

    ...initialFetchType('GET_MARKETS', 'market/GET_MARKTETS'),
    ...initialFetchType('GET_MARKET', 'market/GET_MARKTET'),
    ...initialFetchType('GET_MARKET_STOCK_ORDERS', 'market/GET_MARKET_STOCK_ORDER'),
};
