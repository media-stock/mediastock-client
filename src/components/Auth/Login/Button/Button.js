import React from 'react';
import styled from 'styled-components';
import { UIButton } from 'ui';

export default function LoginButton({ onClick, loading }) {
    return <LoginButtonView onClick={onClick}>로그인{loading && '중...'}</LoginButtonView>;
}

const LoginButtonView = styled(UIButton)`
    width: 100%;
    margin-top: 3.5rem;

    background-color: ${(props) => props.theme.primaryColor};
    color: white;
`;
