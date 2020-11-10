import React from 'react';
import { TestList } from 'components';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as channelActions from 'stores/channel';

export default function TestArticles() {
    const dispatch = useDispatch();
    const onGetChannels = bindActionCreators(channelActions.onGetChannels, dispatch);

    const { channels } = useSelector((state) => ({
        channels: state.channel?.toJS().channels,
    }));

    React.useEffect(() => {
        onGetChannels();
    }, []);

    return <TestList datas={channels.data} />;
}
