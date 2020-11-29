import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export default function PCLayout({ children }) {
    const router = useRouter();
    const mobile = router?.query?.mobile;
    if (mobile === 'true') return null;

    return (
        <PCWrapper>
            <PCView>{children}</PCView>
        </PCWrapper>
    );
}

const PCWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
`;

const PCView = styled.div``;
