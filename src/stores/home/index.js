import { handleActions } from 'redux-actions';

import { HOME_TYPES } from './type';
import { homeState } from './state';
import { createPromiseThunk, createPromiseState, setImmutableState } from '../redux';
import * as homeAPI from 'services/home';

const setChannelRealTime = ({ dispatch, data }) => {
    const channelRealTime = data?.realTime;
    const nextState = createPromiseState.done(
        channelRealTime?.channels,
        channelRealTime?.totalCount,
    );
    dispatch({
        type: HOME_TYPES.SET_STATE,
        payload: { reducer: 'channelRealTime', nextState },
    });
};

const setChannelNew = ({ dispatch, data }) => {
    const channelNew = data?.new;
    const nextState = createPromiseState.done(channelNew?.channels, channelNew?.totalCount);

    dispatch({
        type: HOME_TYPES.SET_STATE,
        payload: { reducer: 'channelNew', nextState },
    });
};

export const onGetHome = createPromiseThunk(HOME_TYPES.GET_HOME, homeAPI.onGetHome, {
    after: [setChannelRealTime, setChannelNew],
});

export default handleActions(
    {
        [HOME_TYPES.SET_STATE]: (state, action) => {
            const { reducer, nextState } = action.payload;
            return setImmutableState(state, reducer, nextState);
        },
        [HOME_TYPES.GET_HOME]: (state, _) => {
            const pendingState = createPromiseState.pending();
            return setImmutableState(state, 'home', pendingState);
        },
        [HOME_TYPES.GET_HOME_DONE]: (state, action) => {
            const doneState = createPromiseState.done({});
            return setImmutableState(state, 'home', doneState);
        },
        [HOME_TYPES.GET_HOME_ERROR]: (state, action) => {
            const errorState = createPromiseState.error(action.payload);
            return setImmutableState(state, 'home', errorState);
        },
    },
    homeState,
);
