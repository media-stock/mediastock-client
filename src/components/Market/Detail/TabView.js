import React, { useCallback } from 'react';
import styled from 'styled-components';

export default function MarketTabView({ tab, setTab }) {
    const onClickTab = useCallback(
        (active) => {
            setTab(active);
        },
        [tab],
    );

    return (
        <TabView>
            <TabItem active={tab === 'price'} onClick={() => onClickTab('price')}>
                호가
            </TabItem>
            <TabItem active={tab === 'chart'} onClick={() => onClickTab('chart')}>
                차트
            </TabItem>
        </TabView>
    );
}

const TabView = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 20px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

const TabItem = styled.p`
    flex: 1;
    text-align: center;

    line-height: 32px;

    color: ${(props) => (props.active ? '#fff' : props.theme.primaryColor)};
    background-color: ${(props) => (props.active ? props.theme.primaryColor : 'transparent')};
    font-weight: ${(props) => (props.active ? 'bold' : 'normal')};

    border-radius: 14px;
`;
