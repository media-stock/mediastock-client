import React from 'react';

// helmet
import { Helmet } from 'components';
import { moreHelmet as helmet } from 'config';

// container
import MoreNoticeContainer from 'container/more/notice';

export default function MorePage() {
    return (
        <>
            <Helmet helmet={helmet} />
            <MoreNoticeContainer />
        </>
    );
}
