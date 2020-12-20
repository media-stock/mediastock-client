import React from 'react';
import styled from 'styled-components';

export default function MarketMainListItem({ profile }) {
    return (
        <ItemWrapper>
            <ItemProfile src="/sample-profile.png" alt="profile" />
        </ItemWrapper>
    );
}

const ItemWrapper = styled.div`
    width: 170px;
    height: 230px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    border: 1px solid #333;
`;

const ItemProfile = styled.img`
    width: 150px;
    height: 150px;
`;

const ItemNameWrapper = styled.div``;

const ItemMoneyWrapper = styled.div``;

const ItemPercentWrapper = styled.div``;

const ProfileName = styled.div``;
