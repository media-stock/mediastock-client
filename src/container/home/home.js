import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// redux
import { useDispatch, useSelector } from 'react-redux';
import * as homeActions from 'stores/home';

// components
import {
    Carousel,
    HomeSearchInput,
    HomeChannelRealTime,
    HomeChannelNew,
    HomeMediaTalkRanking,
} from 'components';

export default function HomeContainer({ dispatch, state }) {
    const [sort, setSort] = useState(1);

    const { home } = state;
    const { channelRealTime, channelNew, mediaTalkRanking } = home?.toJS();

    useEffect(() => {
        dispatch(homeActions.onGetMediaTalkRanking({ sort }));
    }, [sort]);

    return (
        <HomeView>
            <HomeSearchInput />
            <Carousel />
            <HomeChannelRealTime rankings={channelRealTime?.data} />
            <HomeChannelNew channels={channelNew?.data} />
            <HomeMediaTalkRanking sort={sort} setSort={setSort} rankings={mediaTalkRanking?.data} />
        </HomeView>
    );
}

const HomeView = styled.div``;
