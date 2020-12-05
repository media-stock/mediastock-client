import React from 'react';
import styled from 'styled-components';

import { useMobileCheck } from 'lib/hooks';

export default function LoadingContainer() {
    useMobileCheck('/home');

    return <LoadingView />;
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

    background-color: #223351;
`;
