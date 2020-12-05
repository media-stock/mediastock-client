import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function ChannelRealTime({ rankings = [] }) {
    if (!rankings || rankings?.length === 0)
        rankings = [
            {
                id: 1,
                index: 1,
                name: '임영웅',
                talk: 10000,
                up: 11500,
                percent: 30,
            },
        ];

    const recentRanking = rankings?.length > 0 ? rankings[0] : null;

    return (
        <ChannelRealTimeView>
            <Title>실시간 검색 채널 순위</Title>
            <RankingItem ranking={recentRanking} />
        </ChannelRealTimeView>
    );
}

function RankingItem({ ranking }) {
    return (
        <RankingItemView>
            <Ranking>{ranking?.index}</Ranking>
            <Profile src={ranking?.profile || '/sample-profile.png'} />
            <Name>{ranking?.name}</Name>
            <Talk>{ranking?.talk}톡</Talk>
            <Up>{ranking?.up}</Up>
            <Percent>{ranking?.percent}%</Percent>
            <AngelDown>
                <FontAwesomeIcon icon={faAngleDown} color="#B5B5B5" />
            </AngelDown>
        </RankingItemView>
    );
}

const ChannelRealTimeView = styled.div`
    margin-top: 11px;
    padding: 0 15px;
`;

const Title = styled.h1`
    margin-bottom: 5px;

    color: #000;
    font-size: 13px;
    font-weight: bold;
`;

const RankingItemView = styled.div`
    padding: 0 8px;
    padding-top: 11px;
    padding-bottom: 10px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;

    border: 2px solid ${(props) => props.theme.primaryColor};
    border-radius: 6px;
`;

const Ranking = styled.p`
    color: #000;
    font-weight: bold;
    font-size: 14px;
`;

const Profile = styled.img`
    margin-left: 7px;
    width: 30px;
    height: 30px;
`;

const Name = styled.p`
    margin-left: 5px;

    color: #000;
    font-weight: bold;
    font-size: 15.5px;
`;

const Talk = styled.p`
    margin: 0 auto;

    color: red;
    font-weight: bold;
    font-weight: 14px;
`;

const Up = styled(Talk)``;

const Percent = styled(Talk)`
    margin-right: 5px;
`;

const AngelDown = styled.div``;
