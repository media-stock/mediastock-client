import React from 'react';
import styled from 'styled-components';
import { UIButton } from 'ui';

export default function RegisterToLoginButton({ onClick }) {
    return <Button onClick={onClick}>로그인하기</Button>;
}

const Button = styled(UIButton)`
    width: 100%;
    margin-top: 10px;
`;
