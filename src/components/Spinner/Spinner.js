import React from 'react';
import styled from 'styled-components';

export default function Spinner({ view = false }) {
    if (!view) return null;

    return (
        <SpinnerView>
            <LoadingText>Loading...</LoadingText>
        </SpinnerView>
    );
}

const SpinnerView = styled.div`
    width: 100%;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.5);
`;

const LoadingText = styled.p`
    font-size: 22px;
    color: #fff;
`;
