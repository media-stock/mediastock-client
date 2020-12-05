import React from 'react';
import styled from 'styled-components';

// components
import { Carousel, HomeSearchInput, HomeChannelRealTime } from 'components';

export default function HomeContainer() {
    return (
        <HomeView>
            <HomeSearchInput />
            <Carousel />
            <HomeChannelRealTime />
        </HomeView>
    );
}

const HomeView = styled.div``;
