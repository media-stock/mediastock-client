import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export default function PCLayout({ children }) {
    const router = useRouter();
    const { pathname, query } = router;
    const mobile = query?.mobile;
    if (mobile === 'true') return null;
    if (pathname === '/') return null;

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
