import React from 'react';
import styled, { css } from 'styled-components';

import { UIText, UIHeaderText } from 'ui';

export default function MarketMainListItem({ profile, name = '감스트' }) {
    return (
        <ItemWrapper>
            <ItemProfile src="/sample-profile.png" alt="profile" />
            <ItemNameWrapper>
                <ProfileName size="h3">{name}</ProfileName>
                유튜브
            </ItemNameWrapper>
            <ItemMoneyWrapper>
                <TokText text>현재가</TokText>
                <TokText type="red">30,000톡</TokText>
            </ItemMoneyWrapper>
            <ItemPercentWrapper>
                <PercentText type="red">▲2,500</PercentText>
                <PercentText type="red">+15%</PercentText>
            </ItemPercentWrapper>
        </ItemWrapper>
    );
}

const ItemWrapper = styled.div`
    width: 170px;
    height: 250px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const ItemProfile = styled.img`
    width: 150px;
    height: 150px;
`;

const ItemNameWrapper = styled.div`
    height: 35px;

    display: flex;
    justify-content: space-around;
`;

const ItemMoneyWrapper = styled.div`
    height: 27px;

    display: flex;
    justify-content: space-around;
`;

const ItemPercentWrapper = styled.div`
    padding-right: 15px;
    margin-top: -5px;

    display: flex;
    justify-content: flex-end;
`;

const ProfileName = styled(UIHeaderText)``;

const TokText = styled(UIText)`
    font-weight: bold;
    font-size: 15px;

    ${(props) =>
        props.text &&
        css`
            color: #919191 !important;
            font-weight: 500 !important;
        `}
`;

const UpIcon = styled;

const DownIcon = styled;

const PercentText = styled(UIText)`
    font-weight: bold;
    font-size: 12px;

    & + & {
        padding-left: 6px;
    }
`;
