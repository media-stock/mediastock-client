import React from 'react';
import Head from 'next/head';

// container
import IndexContainer from 'container/index';

export default function IndexPage() {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css"
                />
            </Head>
            <IndexContainer />
        </>
    );
}
