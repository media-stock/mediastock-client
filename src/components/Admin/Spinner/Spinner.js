import React from 'react';
import styled from 'styled-components';
import { Spin, Alert } from 'antd';

export default function Spinner({ view }) {
    if (!view) return null;

    return (
        <SpinnerView>
            <Spin tip="Loading..." />
        </SpinnerView>
    );
}

const SpinnerView = styled.div`
    width: 100%;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.4);
`;
