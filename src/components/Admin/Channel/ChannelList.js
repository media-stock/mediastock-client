import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as channelActions from 'stores/channel';

// components
import { AdminTable } from 'components';

const columns = () => [
    {
        title: 'Channel ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '이름',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '카테고리',
        dataIndex: 'category',
        key: 'category',
    },
    {
        title: '대행사',
        dataIndex: 'agency',
        key: 'agency',
    },
    {
        title: '상태',
        dataIndex: 'state',
        key: 'state',
    },
];

export default function ChannelList() {
    const router = useRouter();

    const dispatch = useDispatch();
    const { setChannelsReset, setChannelsPage, onGetChannels, onGetChannel } = bindActionCreators(
        channelActions,
        dispatch,
    );

    const { channels } = useSelector((state) => ({
        channels: state.channel.toJS().channels,
    }));
    const { data, dataCount, pending, limit, offset } = channels;

    const onItemClick = useCallback((id) => {
        router.push({
            pathname: '/admin',
            query: { page: 'channel', subPage: 'detail', id },
        });
    });

    React.useEffect(() => {
        if (offset === 0) setChannelsReset();
        onGetChannels();
    }, [limit, offset]);

    return (
        <>
            <AdminTable
                columns={columns}
                data={data}
                dataCount={dataCount}
                pending={pending}
                limit={limit}
                offset={offset}
                setPage={setChannelsPage}
                onItemClick={onItemClick}
            />
        </>
    );
}
