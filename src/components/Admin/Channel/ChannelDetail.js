import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

// antd
import { Modal } from 'antd';
// components
import { AdminSpinner, AdminError } from 'components';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as channelActions from 'stores/channel';

export default function AdminChannelDetail({ subPage }) {
    const router = useRouter();
    const id = router.query?.id;

    const dispatch = useDispatch();
    const { onGetChannel } = bindActionCreators(channelActions, dispatch);

    const { channel } = useSelector((state) => ({
        channel: state.channel.toJS().channel,
    }));
    const { data, pending, error } = channel;

    const onCancel = useCallback(() => {
        router.back();
    });

    useEffect(() => {
        onGetChannel({ id });
    }, [id]);

    return (
        <>
            <Modal
                title={`채널 자세히 보기 - ${id}`}
                centered
                width={1000}
                visible={subPage === 'detail'}
                onCancel={onCancel}
            >
                {JSON.stringify(data)}
                <AdminSpinner view={pending} />
                <AdminError view={!!error} error={error} />
            </Modal>
        </>
    );
}
