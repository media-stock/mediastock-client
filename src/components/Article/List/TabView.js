import React from 'react';
import styled from 'styled-components';

import { UIText } from 'ui';

export default function TabView({ sort, setSort }) {
    return (
        <TabViewWrapper>
            <TabViewItem onClick={() => setSort(0)} active={sort === 0}>
                자유게시판
            </TabViewItem>
            <TabViewItem onClick={() => setSort(1)} active={sort === 1}>
                추천게시판
            </TabViewItem>
            <TabViewItem onClick={() => setSort(2)} active={sort === 2}>
                베스트게시판
            </TabViewItem>
        </TabViewWrapper>
    );
}

const TabViewWrapper = styled.div`
    padding: 10px 0;

    display: flex;
    align-items: center;
`;

const TabViewItem = styled(UIText)`
    flex: 1;

    text-align: center;
    cursor: pointer;

    color: ${(props) => (props.active ? props.theme.primaryColor : '#8e8e90')};
    font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
`;
