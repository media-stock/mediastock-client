import React, { useState } from 'react';
import styled from 'styled-components';

// components
import {
    Carousel,
    HomeSearchInput,
    HomeChannelRealTime,
    HomeChannelNew,
    HomeMediaTalkRanking,
} from 'components';

// redux
import { useSelector } from 'react-redux';

export default function HomeContainer() {
    const [sort, setSort] = useState(1);

    const { channelRealTime, channelNew } = useSelector((state) => ({
        channelRealTime: state.home.toJS().channelRealTime,
        channelNew: state.home.toJS().channelNew,
    }));

    return (
        <HomeView>
            <HomeSearchInput />
            <Carousel />
            <HomeChannelRealTime rankings={channelRealTime?.data} />
            <HomeChannelNew channels={channelNew?.data} />
            <HomeMediaTalkRanking sort={sort} setSort={setSort} />
        </HomeView>
    );
}

const HomeView = styled.div``;
