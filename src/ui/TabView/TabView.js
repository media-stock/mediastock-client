import React from 'react';
import styled from 'styled-components';

export default function UITabView({ children, labels = [], currentPage = 0, setCurrentPage }) {
    children = React.Children.toArray(children);
    const child = children[currentPage] ? children[currentPage] : null;

    if (labels?.length === 0) return null;

    return (
        <TabView>
            <TabViewList
                tabLabels={labels}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            {child}
        </TabView>
    );
}

function TabViewList({ tabLabels, currentPage, setCurrentPage }) {
    const tabList = tabLabels.map((tabLabel, index) => (
        <TabItem
            key={`tab-view-${index}`}
            active={index === currentPage}
            onClick={() => setCurrentPage(index)}
        >
            {tabLabel}
        </TabItem>
    ));

    return <TabList>{tabList}</TabList>;
}

const TabView = styled.div``;

const TabList = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
`;

const TabItem = styled.p`
    flex: 1;
    text-align: center;
    padding: 3.5px 0;

    border-right: 1px solid #ddd;

    &:last-child {
        border-color: transparent;
    }

    ${(props) => {
        if (!props.active) return '';

        return `
            color: white;
            font-weight: bold;

            border-radius: 8px;
            border-color: transparent;
            background-color: ${props.theme.primaryColor};
        `;
    }}
`;
