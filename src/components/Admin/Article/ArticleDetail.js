import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Modal } from 'antd';
import { AdminSpinner, AdminError } from 'components';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as articleActions from 'stores/article';

export default function AdminArticleDetail({ subPage }) {
    const router = useRouter();
    const id = router.query?.id;

    const dispatch = useDispatch();
    const { onGetArticle } = bindActionCreators(articleActions, dispatch);

    const { article } = useSelector((state) => ({
        article: state.article.toJS().article,
    }));
    const { data, pending, error } = article;

    const onCancel = useCallback(() => {
        router.back();
    });

    useEffect(() => {
        onGetArticle({ id });
    }, [id]);

    return (
        <Modal
            title={`영상 자세히 보기 - ${id}`}
            centered
            width={1000}
            visible={subPage === 'detail'}
            onCancel={onCancel}
        >
            {JSON.stringify(data)}
            <AdminSpinner view={pending} />
            <AdminError view={!!error} error={error} />
        </Modal>
    );
}
