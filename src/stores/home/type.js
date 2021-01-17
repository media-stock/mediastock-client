import { initialFetchType } from 'lib';

export const HOME_TYPES = {
    SET_STATE: 'home/SET_STATE',

    ...initialFetchType('GET_HOME', 'home/GET_HOME'),
    ...initialFetchType('GET_BANNERS', 'home/GET_BANNERS'),
    ...initialFetchType('GET_MEDIA_TALK_RANKING', 'home/GET_MEDIA_TALK_RANKING'),
};
