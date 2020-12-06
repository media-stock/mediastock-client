import { TYPE_DONE, TYPE_ERROR } from '../utils';

export const HOME_TYPES = {
    SET_STATE: 'home/SET_STATE',

    GET_HOME: 'home/GET_HOME',
    GET_HOME_DONE: TYPE_DONE('home/GET_HOME'),
    GET_HOME_ERROR: TYPE_DONE('home/GET_HOME'),
};
