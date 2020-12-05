import React from 'react';
import styled from 'styled-components';

export default function RegisterHeader({ text = '회원가입' }) {
    return (
        <HeaderView>
            <HeaderText>{text}</HeaderText>
            <CloseButton>X</CloseButton>
        </HeaderView>
    );
}

const HeaderView = styled.div`
    width: 100%;
    height: 50px;
    padding: 0 20px;

    display: flex;
    align-items: center;

    background-color: #415982;
`;

const HeaderText = styled.p`
    color: white;
    font-size: 15px;
`;

const CloseButton = styled.p`
    margin-left: auto;

    color: white;
    font-size: 17px;
`;
