import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Modal } from 'antd';
import { AdminSpinner, AdminError } from 'components';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as stockActions from 'stores/stock';

export default function AdminIPODetail({ subPage }) {
    const router = useRouter();
    const id = router.query?.id;

    const dispatch = useDispatch();
    const { onGetIPO } = bindActionCreators(stockActions, dispatch);

    const { ipo } = useSelector((state) => ({
        ipo: state.stock.toJS().ipo,
    }));
    const { data, pending, error } = ipo;

    const onCancel = useCallback(() => {
        router.back();
    });

    useEffect(() => {
        onGetIPO({ id });
    }, [id]);

    return (
        <Modal
            title={`IPO 자세히 보기 - ${id}`}
            centered
            width={1000}
            visible={subPage === 'ipo-detail'}
            onCancel={onCancel}
        >
            {JSON.stringify(data)}
            <AdminSpinner view={pending} />
            <AdminError view={!!error} error={error} />
        </Modal>
    );
}
