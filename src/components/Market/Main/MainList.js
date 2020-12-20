import React from 'react';
import styled from 'styled-components';
import MarketMainListItem from './MainListItem';

export default function MarketMainList({ active }) {
    if (active === 'detail') return null;
    return (
        <ListWrapper>
            <MarketMainListItem />
            <MarketMainListItem />
            <MarketMainListItem />
            <MarketMainListItem />
            <MarketMainListItem />
            <MarketMainListItem />
            <MarketMainListItem />
            <MarketMainListItem />
            <MarketMainListItem />
            <MarketMainListItem />
        </ListWrapper>
    );
}

const ListWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
