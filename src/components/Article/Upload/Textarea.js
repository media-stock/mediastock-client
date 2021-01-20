import React from 'react';
import styled from 'styled-components';

export default function ArticleUploadTextarea({ ...props }) {
    return <Textarea {...props} />;
}

const Textarea = styled.textarea`
    width: 100%;
    min-height: 300px;
    max-height: 400px;
    margin-top: 12px;
    padding: 12px;

    border: 1px solid #ddd; ;
`;
