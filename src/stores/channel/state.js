import { Map } from 'immutable';
import { initialFetchState } from 'lib';

export const channelState = Map({
    channels: initialFetchState.list,
    channel: initialFetchState.object,
    channelVideos: initialFetchState.list,
    channelStatistics: initialFetchState.list,
    myChannels: initialFetchState.list,
});
