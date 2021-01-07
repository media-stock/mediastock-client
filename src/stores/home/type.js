import { TYPE_DONE, TYPE_ERROR } from '../utils';

export const HOME_TYPES = {
    SET_STATE: 'home/SET_STATE',

    GET_HOME: 'home/GET_HOME',
    GET_HOME_DONE: TYPE_DONE('home/GET_HOME'),
    GET_HOME_ERROR: TYPE_DONE('home/GET_HOME'),

    GET_MEDIA_TALK_RANKING: 'home/GET_MEDIA_TALK_RANKING',
    GET_MEDIA_TALK_RANKING_DONE: TYPE_DONE('home/GET_MEDIA_TALK_RANKING'),
    GET_MEDIA_TALK_RANKING_ERROR: TYPE_ERROR('home/GET_MEDIA_TALK_RANKING'),
};
