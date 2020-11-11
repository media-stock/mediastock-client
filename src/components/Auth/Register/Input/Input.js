import React from 'react';
import styled from 'styled-components';
import { Input } from 'lib/styles';

export default function RegisterInput({ name, value, onChange, placeholder }) {
    return (
        <RegisterInputView
            type={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}
export const RegisterInputView = styled(Input)`
    width: 100%;
    margin-bottom: 1rem;

    &:nth-child(3) {
        margin-bottom: 0;
    }
`;
