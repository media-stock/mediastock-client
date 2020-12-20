import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

export default function CommentInput({ value, onChange, onCreate }) {
    return (
        <CommentInputView>
            <Input name="comment" value={value} onChange={onChange} />

            <UploadButton onClick={onCreate}>등록</UploadButton>
        </CommentInputView>
    );
}

const CommentInputView = styled.div`
    width: 100%;
    height: 55px;
    padding: 0 17px;

    display: flex;
    align-items: center;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 70px;

    background-color: white;
    border-top: 1px solid #ddd;
`;

const Input = styled.input`
    width: 100%;
    height: 37px;
    padding: 0 12px;
    padding-right: 65px;

    color: #333;
    font-size: ${(props) => props.theme.fontSizeNormal};
    font-weight: normal;

    color: #333;
    background-color: #e1e1e1;
    border-radius: 6px;
    outline: none;
    border: none;
`;

const UploadButton = styled.p`
    width: 50px;
    line-height: 37px;
    text-align: center;

    font-size: ${(props) => props.theme.fontSizeNormal};
    color: white;

    background-color: ${(props) => props.theme.primaryColor};
    border-radius: 6px;

    position: absolute;
    right: 16px;
`;
