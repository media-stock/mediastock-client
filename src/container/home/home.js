import React from 'react';
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
    const { channelRealTime, channelNew } = useSelector((state) => ({
        channelRealTime: state.home.toJS().channelRealTime,
        channelNew: state.home.toJS().channelNew,
    }));

    return (
        <HomeView>
            <HomeSearchInput />
            <Carousel />
            <HomeChannelRealTime />
            <HomeChannelNew />
            <HomeMediaTalkRanking />
        </HomeView>
    );
}

const HomeView = styled.div``;
