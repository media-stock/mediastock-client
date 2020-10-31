import React from 'react';
import styled from 'styled-components';

// components
import { MainFirstPage, MainSecondPage } from 'components';

export default function IndexContainer() {
    return (
        <IndexContainerView>
            <MainFirstPage />
            <MainSecondPage />
        </IndexContainerView>
    );
}

const IndexContainerView = styled.div`
    width: 100%;
    min-height: 100vh;

    position: absolute;
    top: 0;
    left: 0;
`;
