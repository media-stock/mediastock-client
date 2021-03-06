import React from 'react';
import styled from 'styled-components';

import { createDummyList, getPercentData } from 'lib/utils';

const dummy = {
    id: 1,
    profile: '/sample-profile.png',
    name: '감스트',
    now: 50000,
    top: 52000,
};

export default function ChannelNew({ channels = [] }) {
    const channelList = channels.map((channel, index) => (
        <ChannelNewItem key={channel?.id} index={index} channel={channel} />
    ));

    return (
        <ChannelNewView>
            <ChannelNewListTitle>신규 채널 경매</ChannelNewListTitle>
            <ChannelNewList>{channelList}</ChannelNewList>
        </ChannelNewView>
    );
}

function ChannelNewItem({ index, channel }) {
    const { up, percent } = getPercentData(channel?.now, channel?.top);

    return (
        <ChanneNewItemView index={index}>
            <Profile src={channel?.thumbnail} />
            <Name>{channel?.name}</Name>
            <Start>시작가 {channel?.curPrice}톡</Start>
            <Top>
                최고가 {channel?.maxPrice}톡
                {channel?.curPrice ? (up ? `+${percent}%` : `-${percent}%`) : ''}
            </Top>
        </ChanneNewItemView>
    );
}

const ChannelNewView = styled.div`
    margin-top: 22px;
`;

const ChannelNewList = styled.div`
    margin-top: 8px;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
`;

const ChannelNewListTitle = styled.h1`
    font-size: 16px;
    font-weight: bold;
    color: #000;
`;

const ChanneNewItemView = styled.div`
    width: 50%;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
`;

const Profile = styled.img`
    width: 90%;
    object-fit: cover;
`;

const Name = styled.p`
    font-size: 15px;
    font-weight: bold;
    color: #000;
`;

const Start = styled.p`
    width: 80%;
    margin: 0 auto;
    margin-top: 10px;
    text-align: start;

    font-size: 9px;
    font-weight: bold;
    color: red;
`;

const Top = styled(Start)`
    margin-top: 4px;
`;
