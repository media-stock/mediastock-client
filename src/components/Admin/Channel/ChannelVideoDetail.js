import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

// antd
import { Modal } from 'antd';

// components
import { AdminTable, AdminSpinner, AdminError } from 'components';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as adminActions from 'stores/admin';

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
    if (video !== 'true' || !channelId) return null;

    const dispatch = useDispatch();
    const { setPage, onGetChannelVideos } = bindActionCreators(adminActions, dispatch);

    const channelVideos = useSelector((state) => state.admin.toJS().channelVideos);
    const { data, dataCount, pending, error, page, offset } = channelVideos;

    const onItemClick = (id) => {
        console.log(`AdminChannelDetail`, id);
    };

    const setPagination = ({ page, offset }) => {
        setPage({ page, offset, type: 'channelVideos' });
    };

    const onCancel = () => {
        router.back();
    };

    useEffect(() => {
        onGetChannelVideos({ id: channelId, sort: 'viewCount' });
    }, [channelId]);

    return (
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
    );
}
