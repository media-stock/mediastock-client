import React, { useState, useCallback } from 'react';
import { TestObject } from 'components';
import { Input } from 'antd';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as channelActions from 'stores/channel';

export default function TestArticles() {
    const [id, setId] = useState(0);

    const dispatch = useDispatch();
    const onGetChannel = bindActionCreators(channelActions.onGetChannel, dispatch);

    const { channel } = useSelector((state) => ({
        channel: state.channel?.toJS().channel,
    }));

    React.useEffect(() => {
        onGetChannel({ id });
    }, [id]);

    const onChange = useCallback((e) => {
        const { value } = e.target;
        setId(value);
    });

    return (
        <>
            <Input style={{ margin: '2rem 0' }} value={id} onChange={onChange} />
            <TestObject data={channel?.data} />
        </>
    );
}
