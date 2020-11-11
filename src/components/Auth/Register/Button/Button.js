import React from 'react';
import styled from 'styled-components';
import { Button } from 'lib/styles';

export default function RegisterButton({ onClick, loading }) {
    return <RegisterButtonView onClick={onClick}>회원가입{loading && '중...'}</RegisterButtonView>;
}

const RegisterButtonView = styled(Button)`
    width: 100%;
    margin-top: 3.5rem;

    background-color: ${(props) => props.theme.primaryColor};
`;
