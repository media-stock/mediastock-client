import { Map } from 'immutable';
import { initialFetchState } from 'lib';

export const homeState = Map({
    home: initialFetchState.object,
    banners: initialFetchState.list,
    channelRealTime: initialFetchState.list,
    channelNew: initialFetchState.list,
    mediaTalkRanking: initialFetchState.list,
});
