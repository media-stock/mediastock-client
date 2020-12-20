import React from 'react';
import styled from 'styled-components';
import { UIButton } from 'ui';

export default function LoginToRegisterButton({ onClick }) {
    return <RegisterButtonView onClick={onClick}>회원가입 하기</RegisterButtonView>;
}

const RegisterButtonView = styled(UIButton)`
    width: 100%;
    margin-top: 0.7rem;
`;
