import { handleActions } from 'redux-actions';
import { ADMIN_TYPES } from './type';
import { adminState } from './state';

import { createPromiseThunk, createFetchState, setImmutableState } from 'lib';
import * as adminAPI from 'services/admin';

export const onGetChannels = createPromiseThunk(ADMIN_TYPES.GET_CHANNELS, adminAPI.onGetChannels);
export const onGetChannel = createPromiseThunk(ADMIN_TYPES.GET_CHANNEL, adminAPI.onGetChannel);

export default handleActions({}, adminState);
