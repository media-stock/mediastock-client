import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

// antd
import { Modal } from 'antd';

// components
import { AdminTable, AdminSpinner, AdminError } from 'components';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as channelActions from 'stores/channel';

const columns = () => [
    {
        title: 'Video ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '제목',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: '조회수',
        dataIndex: 'viewCount',
        key: 'viewCount',
    },
    {
        title: '좋아요 수',
        dataIndex: 'likeCount',
        key: 'likeCount',
    },
];

export default function AdminChannelDetail() {
    const router = useRouter();
    const video = router.query?.video;
    const channelId = router.query?.channelId;
    if (video !== 'true') return null;

    const dispatch = useDispatch();
    const { setPage, onGetChannelVideos } = bindActionCreators(channelActions, dispatch);

    const { channelVideos } = useSelector((state) => ({
        channelVideos: state.channel.toJS().channelVideos,
    }));
    const { data, dataCount, pending, error, page, offset } = channelVideos;

    const onItemClick = useCallback((id) => {
        console.log(`AdminChannelDetail`, id);
    });

    const setPagination = useCallback((state) => {
        const { page, offset } = state;
        setPage({ page, offset, type: 'channelVideos' });
    });

    const onCancel = useCallback(() => {
        router.back();
    });

    useEffect(() => {
        onGetChannelVideos({ id: channelId, sort: 'viewCount' });
    }, [channelId]);

    useEffect(() => {
        onGetChannelVideos({ id: channelId, sort: 'viewCount' });
    }, [page, offset]);

    return (
        <>
            <Modal
                title={`채널 자세히 보기 - ${channelId}`}
                centered
                width="95%"
                visible={!!channelId}
                onCancel={onCancel}
            >
                <AdminTable
                    columns={columns}
                    data={data}
                    dataCount={dataCount}
                    page={page}
                    offset={offset}
                    onItemClick={onItemClick}
                    setPagination={setPagination}
                />
                <AdminSpinner view={pending} />
                <AdminError view={!!error} error={error} />
            </Modal>
        </>
    );
}

const AdminChannelDetailView = styled.div``;
