import React, { useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

import { getPercentData } from 'lib/utils';

export default function MediaTalkRanking({ order, setOrder, rankings = [] }) {
    const rankingList = rankings?.map((ranking, index) => (
        <MediaTalkRankingItem key={ranking?.id} ranking={ranking} index={index} />
    ));

    console.log(`MediaTalkRanking`, rankings);

    return (
        <MediaTalkRankingView>
            <MediaTalkRankingTopView>
                <Title>미톡랭킹</Title>
                <FilterList>
                    <FilterItem active={order === 'yield'} onClick={() => setOrder('yield')}>
                        수익률
                    </FilterItem>
                    <FilterItem active={order === 'maxPrice'} onClick={() => setOrder('maxPrice')}>
                        상한가
                    </FilterItem>
                    <FilterItem active={order === 'minPrice'} onClick={() => setOrder('minPrice')}>
                        하한가
                    </FilterItem>
                    <FilterItem
                        active={order === 'transactionCount'}
                        onClick={() => setOrder('transactionCount')}
                    >
                        거래량
                    </FilterItem>
                </FilterList>
            </MediaTalkRankingTopView>
            <MediaTalkRankingList>{rankingList}</MediaTalkRankingList>
        </MediaTalkRankingView>
    );
}

function MediaTalkRankingItem({ index, ranking }) {
    const { diff, color, percent } = getPercentData(ranking?.talk + ranking?.top, ranking?.top);

    return (
        <MediaTalkRankingItemView color={color}>
            <LeftSection>
                <Ranking>{index + 1}</Ranking>
                <Profile src={ranking?.thumbnail} />
            </LeftSection>
            <RightSection>
                <Name>{ranking?.name}</Name>
                <BottomView>
                    <Talk>{ranking?.curPrice}톡</Talk>

                    <FontAwesomeIcon
                        icon={diff ? faSortUp : faSortDown}
                        color={color}
                        style={{ marginLeft: '16px', marginRight: '3px' }}
                    />
                    {/* <Up>{Math.abs(ranking?.top - ranking?.talk)}</Up> */}
                </BottomView>
            </RightSection>
            {/* <Percent>{percent}%</Percent> */}
        </MediaTalkRankingItemView>
    );
}

const MediaTalkRankingView = styled.div`
    margin-top: 20px;
`;

const MediaTalkRankingTopView = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 16px;
    font-weight: bold;
    color: #000;
`;

const FilterList = styled.div`
    margin-left: auto;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

const FilterItem = styled.p`
    margin-left: 7px;

    font-size: 12px;
    color: ${(props) => (props.active ? 'red' : '#7d7d7d')};
`;

const MediaTalkRankingList = styled.div`
    margin-top: 13px;
`;

const MediaTalkRankingItemView = styled.div`
    padding: 9px;
    margin-bottom: 8px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;

    color: ${(props) => props.color};
    border: 2px solid ${(props) => props.theme.primaryColor};
    border-radius: 6px;

    &:last-child {
        margin-bottom: 0;
    }
`;

const LeftSection = styled.section`
    display: flex;
    align-items: center;
`;

const RightSection = styled(LeftSection)`
    flex-direction: column;
    align-items: start;
`;

const BottomView = styled(LeftSection)`
    margin-top: auto;
`;

const Ranking = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: #000;
`;

const Profile = styled.img`
    margin-left: 6px;
    margin-right: 5px;

    width: 50px;
    height: 50px;
`;

const Name = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: #000;
`;

const Talk = styled.p`
    font-size: 12px;
    font-weight: bold;
    color: inherit;
`;

const Up = styled(Talk)``;

const Percent = styled.p`
    margin-left: auto;

    font-weight: bold;
    font-size: 20px;
    color: inherit;
`;
