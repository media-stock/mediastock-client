import React from 'react';
import styled from 'styled-components';
import { UIText } from 'ui';

export default function TabView() {
    return (
        <TabViewList>
            <TabViewItem>
                <UIText>관심목록1</UIText>
            </TabViewItem>
            <TabViewItem>
                <UIText>관심목록2</UIText>
            </TabViewItem>
            <TabViewItem>
                <UIText>관심목록3</UIText>
            </TabViewItem>
            <TabViewItem>
                <UIText>관심목록4</UIText>
            </TabViewItem>
        </TabViewList>
    );
}

const TabViewList = styled.div`
    display: flex;
    align-items: center;
`;

const TabViewItem = styled.div`
    flex: 1;
    text-align: center;
`;
