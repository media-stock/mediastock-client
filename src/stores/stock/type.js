import { initialFetchType } from 'lib';

export const STOCK_TYPES = {
    SET_IPOS_RESET: 'stock/SET_IPOS_RESET',
    SET_IPOS_PAGE: 'stock/SET_IPOS_PAGE',

    ...initialFetchType('GET_IPOS', 'stock/GET_IPOS'),
    ...initialFetchType('GET_IPO', 'stock/GET_IPO'),
};
