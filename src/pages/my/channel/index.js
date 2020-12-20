import React, { useState, useEffect } from 'react';

// redux
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as channelActions from 'stores/channel';

// helmet
import { Helmet } from 'components';
import { myChannelHelmet as helmet } from 'config';

// container
import MyChannelContainer from 'container/my/channel';

export default function MyChannelPage() {
    const dispatch = useDispatch();
    const { onGetMyChannels } = bindActionCreators(channelActions, dispatch);

    useEffect(() => {
        onGetMyChannels();
    }, []);

    return (
        <>
            <Helmet helmet={helmet} />
            <MyChannelContainer />
        </>
    );
}
