import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

// antd
import { Modal, Descriptions } from 'antd';

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

export default function AdminChannelDetail({ subPage }) {
    if (subPage !== 'video-list') return null;

    const router = useRouter();
    const id = router.query?.channelId;

    const dispatch = useDispatch();
    const { onGetChannelVideos } = bindActionCreators(channelActions, dispatch);

    const { channelVideos } = useSelector((state) => ({
        channelVideos: state.channel.toJS().channelVideos,
    }));
    const { data, dataCount, pending, error } = channelVideos;

    const onCancel = useCallback(() => {
        router.back();
    });

    useEffect(() => {
        onGetChannelVideos({ id, sort: 'likeCount' });
    }, [id]);

    return (
        <>
            <Modal
                title={`채널 자세히 보기 - ${id}`}
                centered
                width="95%"
                visible={!!id}
                onCancel={onCancel}
            >
                <AdminTable columns={columns} data={data} dataCount={dataCount} />
                <AdminSpinner view={pending} />
                <AdminError view={!!error} error={error} />
            </Modal>
        </>
    );
}

const AdminChannelDetailView = styled.div``;
