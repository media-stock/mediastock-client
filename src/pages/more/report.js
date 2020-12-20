import React from 'react';

// helmet
import { Helmet } from 'components';
import { moreHelmet as helmet } from 'config';

// container
import MoreReportContainer from 'container/more/report';

export default function MorePage() {
    return (
        <>
            <Helmet helmet={helmet} />
            <MoreReportContainer />
        </>
    );
}
