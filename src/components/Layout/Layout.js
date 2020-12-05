import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import PCLayout from './PCLayout';
import MobileLayout from './MobileLayout';

import { useMobileCheck } from 'lib/hooks';

export default function Layout({ children }) {
    useMobileCheck();

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
            <MobileLayout>{children}</MobileLayout>
            <PCLayout>{children}</PCLayout>
        </>
    );
}

function LandingPageLayout({ children }) {
    const router = useRouter();
    const { pathname } = router;
    if (pathname !== '/') return null;

    return children;
}
