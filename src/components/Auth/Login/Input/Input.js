import React from 'react';
import styled from 'styled-components';
import { UIInput } from 'ui';

export default function LoginInput({ name, value, onChange, placeholder }) {
    return (
        <LoginInputView
            type={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}
export const LoginInputView = styled(UIInput)`
    width: 100%;
    margin-bottom: 1rem;

    &:nth-child(2) {
        margin-bottom: 0;
    }
`;
