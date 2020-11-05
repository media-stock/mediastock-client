import React from 'react';
import styled from 'styled-components';

export default function MainCover({ cover }) {
    return (
        <MainCoverView>
            <CoverImage src={cover} />
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
