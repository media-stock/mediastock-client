import React from 'react';
import styled from 'styled-components';
import { Input } from 'lib/styles';

export default function LoginInput({ name, value, onChange, placeholder }) {
    return (
        <LoginInputView name={name} value={value} onChange={onChange} placeholder={placeholder} />
    );
}
export const LoginInputView = styled(Input)`
    width: 100%;
    margin-bottom: 1rem;

    &:nth-child(2) {
        margin-bottom: 0;
    }
`;
