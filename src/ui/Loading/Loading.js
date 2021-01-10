import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

export default function UILoading({ view = false }) {
    if (!view) return null;

    return (
        <LoadingView>
            <Spin tip="Loading..." />
        </LoadingView>
    );
}

const LoadingView = styled.div`
    width: 100%;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.3);
`;
