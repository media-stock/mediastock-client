import React from 'react';
import styled from 'styled-components';

export default function ArticleUploadForm({ children, ...props }) {
    return (
        <Form onSubmit={(e) => e.preventDefault()} {...props}>
            {children}
        </Form>
    );
}

const Form = styled.form``;
