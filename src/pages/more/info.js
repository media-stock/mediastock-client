import React from 'react';

// helmet
import { Helmet } from 'components';
import { moreHelmet as helmet } from 'config';

// container
import MoreInfoContainer from 'container/more/info';

export default function MorePage() {
    return (
        <>
            <Helmet helmet={helmet} />
            <MoreInfoContainer />
        </>
    );
}
