import React from 'react';
import styled from 'styled-components';

import { Alert } from 'antd';

export default function AdminError({ view, error }) {
    if (!view) return null;

    return (
        <ErrorView>
            <Alert message="Error" description={JSON.stringify(error)} type="error" showIcon />
        </ErrorView>
    );
}

const ErrorView = styled.div`
    width: 100%;

    position: fixed;
    bottom: 0;
    left: 0;
`;
