import React from 'react';
import MeTalkMarktetContainer from 'container/market';

// helmet
import { Helmet } from 'components';
import { metalkMarketHelmet as helmet } from 'config';

export default function MeTalkMarktetPage() {
    return (
        <>
            <Helmet helmet={helmet} />
            <MeTalkMarktetContainer />
        </>
    );
}
