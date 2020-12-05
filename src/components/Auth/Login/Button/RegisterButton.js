import React from 'react';
import styled from 'styled-components';
import { Button } from 'lib/styles';

export default function LoginToRegisterButton({ onClick }) {
    return <RegisterButtonView onClick={onClick}>회원가입 하기</RegisterButtonView>;
}

const RegisterButtonView = styled(Button)`
    width: 100%;
    margin-top: 0.7rem;
    color: black;
    background-color: ${(props) => props.theme.infoColor};
`;
