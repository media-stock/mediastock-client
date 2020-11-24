import { Map } from 'immutable';
import { initialDataState } from '../utils';

export const channelState = Map({
    channels: initialDataState.list,
    channel: initialDataState.object,
    channelVideos: initialDataState.list,
    channelStatistics: initialDataState.list,
});
