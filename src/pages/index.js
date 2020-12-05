import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

// container
import LandingContainer from 'container/landing';
import LoadingContainer from 'container/loading';
// import HomeContainer from 'container/home';

export default function IndexPage({ isLanding = false }) {
    const router = useRouter();
    const landing = router.query?.landing === 'true';

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css"
                />
            </Head>

            {isLanding || landing ? <LandingContainer /> : <LoadingContainer />}
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {
            isLanding: process.env.LANDING === 'true',
        },
    };
}
