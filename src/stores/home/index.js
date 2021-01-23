import { handleActions } from 'redux-actions';
import { HOME_TYPES } from 'stores/home/type';
import { homeState } from 'stores/home/state';

import { createPromiseThunk, createFetchState, setImmutableState } from 'lib';
import * as homeAPI from 'services/home';

const setChannelRealTime = ({ dispatch, data }) => {
    const channelRealTime = data?.realTime;
    const nextState = createFetchState.done(channelRealTime?.channels, channelRealTime?.totalCount);
    dispatch({
        type: HOME_TYPES.SET_STATE,
        payload: { reducer: 'channelRealTime', nextState },
    });
};

const setChannelNew = ({ dispatch, data }) => {
    const channelNew = data?.new;
    const nextState = createFetchState.done(channelNew?.channels, channelNew?.totalCount);

    dispatch({
        type: HOME_TYPES.SET_STATE,
        payload: { reducer: 'channelNew', nextState },
    });
};

const setBanners = ({ dispatch, data }) => {
    return;

    // const nextState = createFetchState.done(data?.banners);
    // dispatch({ type: HOME_TYPES.SET_STATE, payload: { reducer: 'banners', nextState } });
};

export const onGetHome = createPromiseThunk(HOME_TYPES.GET_HOME, homeAPI.onGetHome, {
    after: [setChannelRealTime, setChannelNew, setBanners],
});

export const onGetMediaTalkRanking = createPromiseThunk(
    HOME_TYPES.GET_MEDIA_TALK_RANKING,
    homeAPI.onGetMediaTalkRanking,
);

export default handleActions(
    {
        [HOME_TYPES.SET_STATE]: (state, action) => {
            const { reducer, nextState } = action.payload;
            return setImmutableState(state, reducer, nextState);
        },
        [HOME_TYPES.GET_HOME]: (state, _) =>
            setImmutableState(state, 'home', createFetchState.pending()),
        [HOME_TYPES.GET_HOME_DONE]: (state, action) =>
            setImmutableState(state, 'home', createFetchState.done()),
        [HOME_TYPES.GET_HOME_ERROR]: (state, action) =>
            setImmutableState(state, 'home', createFetchState.error()),
        [HOME_TYPES.GET_MEDIA_TALK_RANKING]: (state, _) =>
            setImmutableState(state, 'mediaTalkRanking', createFetchState.pending()),
        [HOME_TYPES.GET_MEDIA_TALK_RANKING_DONE]: (state, action) =>
            setImmutableState(
                state,
                'mediaTalkRanking',
                createFetchState.done(action.payload?.ipos, action.payload?.totalCount),
            ),
        [HOME_TYPES.GET_MEDIA_TALK_RANKING_ERROR]: (state, action) =>
            setImmutableState(state, 'mediaTalkRanking', createFetchState.error(action.payload)),
    },
    homeState,
);
