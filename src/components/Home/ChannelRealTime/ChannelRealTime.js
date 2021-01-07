import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

export default function ChannelRealTime({ rankings = [] }) {
    const [clicked, setClicked] = useState(false);
    const recentRanking = rankings?.length > 0 ? rankings[0] : null;

    const onClick = useCallback(
        (e) => {
            setClicked(!clicked);
        },
        [clicked],
    );

    const rankingList = rankings
        ?.slice(0, 10)
        .map((ranking, index) => (
            <RankingItem
                isFirst={index === 0}
                isList
                index={index}
                ranking={ranking}
                clicked={clicked}
                onClick={onClick}
            />
        ));

    return (
        <ChannelRealTimeView>
            <Title>실시간 검색 채널 순위</Title>
            {!clicked && (
                <RankingItem
                    ranking={recentRanking}
                    isList={false}
                    isFirst
                    clicked={clicked}
                    onClick={onClick}
                />
            )}
            {clicked && <RankingListView>{rankingList}</RankingListView>}
        </ChannelRealTimeView>
    );
}

function RankingItem({ index, ranking, isList = true, isFirst, clicked, onClick }) {
    const percent = null;
    return (
        <RankingItemView isList={isList}>
            <Ranking>{isFirst ? 1 : index + 1}</Ranking>
            <Profile src={ranking?.thumbnail || '/sample-profile.png'} />
            <Name>{ranking?.name}</Name>
            {ranking?.curPrice && <Talk>{ranking.curPrice}톡</Talk>}
            <Up>{ranking?.up}</Up>
            {percent && <Percent>{percent}%</Percent>}
            {isFirst && (
                <AngelDown onClick={onClick}>
                    <FontAwesomeIcon icon={clicked ? faAngleUp : faAngleDown} color="#B5B5B5" />
                </AngelDown>
            )}
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

const RankingListView = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    border: 2px solid ${(props) => props.theme.primaryColor};
    border-radius: 6px;
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

    ${(props) => props.isList && 'border: 0;'};
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
