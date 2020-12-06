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

export default function HomeContainer() {
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
