import React from 'react';
import styled from 'styled-components';

export default function MainCover() {
    return (
        <MainCoverView>
            <CoverImage src="/main-cover.png" />
        </MainCoverView>
    );
}

const MainCoverView = styled.div`
    width: 100%;
    min-height: 100vh;
`;

const CoverImage = styled.img`
    width: 100%;
    object-fit: contain;
`;
