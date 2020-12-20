import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

export default function MarketDetailListItem() {
    return (
        <ItemWrapper>
            <Item>
                <ProfileImg src="/sample-profile.png" />
                <ProfileName>
                    감스트 <br /> 인물
                </ProfileName>
            </Item>
            <Item>55,000</Item>
            <Item width="20%" color>
                ▲5,000 <br /> +10%
            </Item>
            <Item width="30%" right>
                10,000,000
                <StarIcon icon={faStar} />
            </Item>
        </ItemWrapper>
    );
}

const ItemWrapper = styled.div`
    width: 100%;
    height: 60px;
    margin-bottom: 5px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const Item = styled.div`
    width: 25%;
    height: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;

    background-color: #f8f8f8;
    color: #000000;

    ${(props) => {
        const color = props?.color;
        if (color) return ` color : #e10f0e;`;
    }}

    ${(props) => {
        const width = props?.width;
        if (width) return `width : ${width};`;
    }}

    ${(props) => {
        const right = props?.right;
        if (right) return `justify-content : flex-end`;
    }}
`;

const ProfileImg = styled.img`
    width: 50%;
`;

const ProfileName = styled.div`
    width: 50%;

    text-align: center;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;

    color: #000000;
`;

const StarIcon = styled(FontAwesomeIcon)`
    color: #ffd816;
    margin-left: 5px;
    margin-right: 5px;
`;
