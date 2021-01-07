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

export default function HomeContainer() {
    const dispatch = useDispatch();

    const [sort, setSort] = useState(1);

    const { channelRealTime, channelNew, mediaTalkRanking } = useSelector((state) => ({
        channelRealTime: state.home.toJS().channelRealTime,
        channelNew: state.home.toJS().channelNew,
        mediaTalkRanking: state.home.toJS().mediaTalkRanking,
    }));

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
