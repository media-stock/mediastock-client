import React from 'react';
import styled from 'styled-components';
import { UIInput } from 'ui';

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
export const RegisterInputView = styled(UIInput)`
    width: 100%;
    margin-bottom: 1rem;

    &:nth-child(3) {
        margin-bottom: 0;
    }
`;
