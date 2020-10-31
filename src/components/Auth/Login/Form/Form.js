import React from 'react';
import styled from 'styled-components';

export default function LoginForm({ children }) {
    return <LoginFormView onSubmit={(e) => e.preventDefault()}>{children}</LoginFormView>;
}

const LoginFormView = styled.form`
    width: 400px;
    height: 100vh;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: calc(50% - 200px);

    @media only screen and (max-width: 399px) {
        width: 100%;
    }
`;
