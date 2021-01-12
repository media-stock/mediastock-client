import { Map } from 'immutable';
import { initialFetchState } from 'lib';

export const homeState = Map({
    home: initialFetchState.object,
    channelRealTime: initialFetchState.list,
    channelNew: initialFetchState.list,
    mediaTalkRanking: initialFetchState.list,
});
