import React from 'react';
import styled from 'styled-components';

export default function LoginForm({ children }) {
    return <LoginFormView onSubmit={(e) => e.preventDefault()}>{children}</LoginFormView>;
}

const LoginFormView = styled.form`
    width: 100%;
    height: 100%;
    padding: 0 22px;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 399px) {
        width: 100%;
    }
`;
