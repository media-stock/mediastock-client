import { Map } from 'immutable';
import { initialFetchState } from 'lib';

export const adminState = Map({
    channels: initialFetchState.list,
    channel: initialFetchState.object,
});
