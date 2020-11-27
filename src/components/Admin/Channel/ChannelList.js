import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as channelActions from 'stores/channel';

// components
import { AdminTable, AdminButton } from 'components';

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

export default function ChannelVideoList() {
    const router = useRouter();
    const subPage = router.query?.subPage;
    if (subPage !== 'list') return null;

    const dispatch = useDispatch();
    const { setPage, onGetChannels, onGetChannel } = bindActionCreators(channelActions, dispatch);

    const { channels } = useSelector((state) => ({
        channels: state.channel.toJS().channels,
    }));
    const { data, dataCount, pending, page, offset } = channels;

    const onItemClick = useCallback((id) => {
        router.push({
            pathname: '/admin',
            query: { ...router.query, channelId: id },
        });
    });

    const setPagination = useCallback((state) => {
        const { page, offset } = state;
        setPage({ page, offset, type: 'channels' });
    });

    const onReload = useCallback(() => {
        setPage({ page: 0, offset, type: 'channels' });
        onGetChannels();
    });

    React.useEffect(() => {
        onReload();
    }, [subPage]);

    React.useEffect(() => {
        onGetChannels();
    }, [page, offset]);

    return (
        <>
            <AdminButton
                createText="채널 생성"
                onCreate={() => {}}
                reloadText="채널 새로고침"
                onReload={onReload}
            />
            <AdminTable
                columns={columns}
                data={data}
                dataCount={dataCount}
                page={page}
                offset={offset}
                onItemClick={onItemClick}
                setPagination={setPagination}
            />
        </>
    );
}
