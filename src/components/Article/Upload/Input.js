import React from 'react';
import styled from 'styled-components';

export default function ArticleUploadInput({ ...props }) {
    return <Input {...props} />;
}

const Input = styled.input`
    width: 100%;
    padding: 3px 12px;
    border: 0;
    border-bottom: 1px solid #8e8e90;
`;
