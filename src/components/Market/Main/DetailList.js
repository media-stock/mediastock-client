import React from 'react';
import styled, { css } from 'styled-components';
import MarketDetailListItem from './DetailListItem';

export default function MarketDetailList({ markets, onMarketItemClick }) {
    const marketList = markets?.map((market) => (
        <MarketDetailListItem market={market} onMarketItemClick={onMarketItemClick} />
    ));

    return (
        <ListWrapper>
            <ListHeaderWrapper>
                <ListHeaderItem changecolor left>
                    채널명
                    <br />
                    카테고리
                </ListHeaderItem>
                <ListHeaderItem>현재가</ListHeaderItem>
                <ListHeaderItem width="20%" changecolor>
                    평가 손익
                    <br />
                    수익률
                </ListHeaderItem>
                <ListHeaderItem width="30%" right>
                    거래량
                </ListHeaderItem>
            </ListHeaderWrapper>
            {marketList}
        </ListWrapper>
    );
}

const ListWrapper = styled.div`
    width: 100%;
`;

const ListHeaderWrapper = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 5px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const ListHeaderItem = styled.div`
    width: 25%;
    height: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    font-size: 14px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;

    background-color: #f1f1f1;
    color: #2e2e2e;

    ${(props) =>
        props.changecolor &&
        css`
            background-color: #2e2e2e;
            color: #ffffff;
        `}
    ${(props) => {
        const width = props?.width;
        if (width) return `width : ${width};`;
    }}
    ${(props) => {
        const left = props?.left;
        const right = props?.right;
        if (left) return `border-top-left-radius : 14px;`;
        if (right) return `border-top-right-radius : 14px;`;
    }}
`;
