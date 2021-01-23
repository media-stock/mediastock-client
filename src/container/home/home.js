import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// redux
import { onGetMediaTalkRanking } from 'stores/home';

// components
import {
    Carousel,
    HomeSearchInput,
    HomeChannelRealTime,
    HomeChannelNew,
    HomeMediaTalkRanking,
} from 'components';

export default function HomeContainer({ dispatch, state }) {
    const [order, setOrder] = useState('yield');

    const { home } = state;
    const { channelRealTime, channelNew, mediaTalkRanking, banners } = home?.toJS();

    useEffect(() => {
        dispatch(onGetMediaTalkRanking({ order }));
    }, [order]);

    return (
        <HomeView>
            <HomeSearchInput />
            <Carousel images={banners?.data} />
            <HomeChannelRealTime rankings={channelRealTime?.data} />
            <HomeChannelNew channels={channelNew?.data} />
            <HomeMediaTalkRanking
                order={order}
                setOrder={setOrder}
                rankings={mediaTalkRanking?.data}
            />
        </HomeView>
    );
}

const HomeView = styled.div``;
