import React from 'react';
import styled from 'styled-components';
import MarketMainListItem from './MainListItem';

export default function MarketMainList({ markets, onMarketItemClick }) {
    const marketList = markets?.map((market) => (
        <MarketMainListItem
            key={market?.id}
            market={market}
            onMarketItemClick={onMarketItemClick}
        />
    ));

    return <ListWrapper>{marketList}</ListWrapper>;
}

const ListWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
`;
