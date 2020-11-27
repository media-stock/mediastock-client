import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Modal, Descriptions, Dropdown, Menu } from 'antd';
import styled from 'styled-components';

// components
import { AdminSpinner, AdminError, AdminButton } from 'components';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as channelActions from 'stores/channel';

export default function AdminChannelDetail({ subPage }) {
    if (subPage !== 'list') return null;

    const router = useRouter();
    const id = router.query?.channelId;

    const dispatch = useDispatch();
    const { onGetChannel, onGetChannelStatistics } = bindActionCreators(channelActions, dispatch);

    const { channel, channelStatistics } = useSelector((state) => ({
        channel: state.channel.toJS().channel,
        channelStatistics: state.channel.toJS().channelStatistics,
    }));
    const { data, pending, error } = channel;
    const recentStatistics =
        channelStatistics?.data?.length > 0 ? channelStatistics?.data[0] : null;

    const onCancel = useCallback(() => {
        router.back();
    });

    const onReload = useCallback(() => {
        onGetChannelStatistics({ id });
    });

    useEffect(() => {
        onGetChannel({ id });
        onGetChannelStatistics({ id });
    }, [id]);

    return (
        <>
            <Modal
                title={`채널 자세히 보기 - ${id}`}
                centered
                width={1000}
                visible={!!id}
                onCancel={onCancel}
            >
                <AdminButton
                    updateText="채널 수정"
                    deleteText="채널 삭제"
                    reloadText="통계 새로고침"
                    onReload={onReload}
                />
                <AdminChannelDetailView>
                    <Descriptions bordered column={3}>
                        <Descriptions.Item label="채널 ID" span={2}>
                            {data?.id}
                        </Descriptions.Item>
                        <Descriptions.Item label="상태" span={1}>
                            {data?.state}
                        </Descriptions.Item>
                        <Descriptions.Item label="채널 이름" span={3}>
                            {data?.name}
                        </Descriptions.Item>
                        <Descriptions.Item label="채널 카테고리" span={2}>
                            {JSON.stringify(data?.category)}
                        </Descriptions.Item>
                        <Descriptions.Item label="대행사" span={1}>
                            {JSON.stringify(data?.agency)}
                        </Descriptions.Item>

                        {/* 채널 상태 */}

                        <Descriptions.Item label="채널 통계" span={3}>
                            <Dropdown
                                overlay={<ChannelStatistics data={channelStatistics?.data} />}
                            >
                                <span>
                                    조회수: {recentStatistics?.viewCount} | 구독자 수:
                                    {` ${recentStatistics?.subscriberCount}`} | 영상 수:{' '}
                                    {` ${recentStatistics?.videoCount}`} | 날짜:{' '}
                                    {` ${recentStatistics?.date}`}
                                </span>
                            </Dropdown>
                        </Descriptions.Item>
                    </Descriptions>
                </AdminChannelDetailView>

                <AdminSpinner view={pending} />
                <AdminError view={!!error} error={error} />
            </Modal>
        </>
    );
}

function ChannelStatistics({ data }) {
    const statisticList = data?.map((statistic) => (
        <ChannelStatistic key={statistic?.id} statistic={statistic} />
    ));

    return <ChannelStatisticsView>{statisticList}</ChannelStatisticsView>;
}

function ChannelStatistic({ statistic }) {
    return (
        <ChannelStatisticView>
            조회수: {statistic?.viewCount} | 구독자 수:
            {` ${statistic?.subscriberCount}`} | 영상 수: {` ${statistic?.videoCount}`} | 날짜:{' '}
            {` ${statistic?.date}`}
        </ChannelStatisticView>
    );
}

const AdminChannelDetailView = styled.div``;

const ChannelStatisticsView = styled.div`
    padding: 1.5rem;

    background-color: white;
`;

const ChannelStatisticView = styled.div`
    padding: 0.6rem 1.2rem;

    border-bottom: 1px solid #ddd;

    &:last-child {
        border-bottom: 0px;
    }
`;
