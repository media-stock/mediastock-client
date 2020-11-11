import { TYPE_DONE, TYPE_ERROR } from '../utils';

export const STOCK_TYPES = {
    SET_IPOS_RESET: 'stock/SET_IPOS_RESET',
    SET_IPOS_PAGE: 'stock/SET_IPOS_PAGE',

    GET_IPOS: 'stock/GET_IPOS',
    GET_IPOS_DONE: TYPE_DONE('stock/GET_IPOS'),
    GET_IPOS_ERROR: TYPE_ERROR('stock/GET_IPOS'),

    GET_IPO: 'stock/GET_IPO',
    GET_IPO_DONE: TYPE_DONE('stock/GET_IPO'),
    GET_IPO_ERROR: TYPE_ERROR('stock/GET_IPO'),
};
