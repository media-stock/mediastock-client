import { Map } from 'immutable';
import { initialDataState } from '../utils';

export const homeState = Map({
    home: initialDataState.object,
    channelRealTime: initialDataState.list,
    channelNew: initialDataState.list,
});
