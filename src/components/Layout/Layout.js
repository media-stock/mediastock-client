import React, { useCallback } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import PCLayout from './PCLayout';
import MobileLayout from './MobileLayout';

import { useWindowDimensions } from 'lib/utils';

export default function Layout({ children }) {
    const router = useRouter();
    const { pathname, query } = router;
    const size = useWindowDimensions();

    const redirect = useCallback((mobile) => {
        router.replace({
            pathname,
            query: { ...query, mobile },
        });
    });

    React.useEffect(() => {
        if (size?.width < 740) {
            redirect(true);
        } else {
            redirect(false);
        }
    }, [size]);

    return (
        <>
            <Head>
                <meta
                    id="viewport"
                    name="viewport"
                    content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
                />
            </Head>
            <MobileLayout>{children}</MobileLayout>
            <PCLayout>{children}</PCLayout>
        </>
    );
}

const LayoutWrapperView = styled.div``;

const LayoutView = styled.div``;
