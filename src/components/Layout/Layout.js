import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import PCLayout from './PCLayout';
import MobileLayout from './MobileLayout';

import { useMediaQuery } from 'react-responsive';

export default function Layout({ children }) {
    const isMobile = useMediaQuery({ query: '(max-width: 700px)' });

    return (
        <>
            <Head>
                <meta
                    id="viewport"
                    name="viewport"
                    content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
                />
            </Head>

            <LandingPageLayout>{children}</LandingPageLayout>
            {isMobile && <MobileLayout>{children}</MobileLayout>}
            {!isMobile && <PCLayout>{children}</PCLayout>}
        </>
    );
}

function LandingPageLayout({ children }) {
    const router = useRouter();
    const { pathname } = router;
    if (pathname !== '/landing') return null;

    return children;
}
