import React from 'react';
import styled from 'styled-components';

export default function RegisterToLoginButton({ onClick }) {
    return <LoginButtonView onClick={onClick}>로그인하기</LoginButtonView>;
}

const LoginButtonView = styled.p`
    width: 100%;
    margin-top: 0.7rem;

    text-align: center;
    color: #555;
`;
