import React from 'react';

// helmet
import { Helmet } from 'components';
import { moreHelmet as helmet } from 'config';

// container
import MoreContainer from 'container/more';

export default function MorePage() {
    return (
        <>
            <Helmet helmet={helmet} />
            <MoreContainer />
        </>
    );
}
