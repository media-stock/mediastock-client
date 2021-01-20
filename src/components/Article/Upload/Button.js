import React from 'react';
import styled, { css } from 'styled-components';

export default function Button({ label, ...props }) {
    return <DefaultButton {...props}>{label}</DefaultButton>;
}

const DefaultButton = styled.button`
    margin-top: 16px;
    padding: 8px 12px;

    border: 1.5px solid transparent;
    border-radius: 4px;
    outline: none;

    ${(props) =>
        props.isSaveButton &&
        css`
            background-color: ${(props) => props.theme.primaryColor};
            color: white;
            margin-right: 8px;
        `}
    ${(props) =>
        props.isCancelButton &&
        css`
            background-color: transparent;
            border: 1.5px solid ${(props) => props.theme.primaryColor};
            color: ${(props) => props.theme.primaryColor};
        `}
`;
