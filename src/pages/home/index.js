import React from 'react';

// helmet
import { Helmet } from 'components';
import { defaultHelmet as helmet } from 'config';

// container
import HomeContainer from 'container/home';

export default function HomePage() {
    return (
        <>
            <Helmet helmet={helmet} />
            <HomeContainer />
        </>
    );
}
