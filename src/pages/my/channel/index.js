import React from 'react';

// helmet
import { Helmet } from 'components';
import { myChannelHelmet as helmet } from 'config';

// container
import MyChannelContainer from 'container/my/channel';

export default function MyChannelPage() {
    return (
        <>
            <Helmet helmet={helmet} />
            <MyChannelContainer />
        </>
    );
}
