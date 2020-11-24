import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { Modal, Descriptions, Comment, Tooltip, Typography } from 'antd';
import { AdminSpinner, AdminError } from 'components';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as articleActions from 'stores/article';

export default function AdminArticleDetail({ subPage }) {
    const router = useRouter();
    const id = router.query?.articleId;

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
            visible={!!id}
            onCancel={onCancel}
        >
            <AdminArticleDetailView>
                <Descriptions bordered>
                    <Descriptions.Item label="영상 ID" span={3}>
                        {data?.id}
                    </Descriptions.Item>
                    <Descriptions.Item label="영상 제목" span={3}>
                        {data?.title}
                    </Descriptions.Item>
                    <Descriptions.Item label="영상 내용" span={3}>
                        {data?.content}
                    </Descriptions.Item>
                    <Descriptions.Item label="생성된 날짜" span={3}>
                        {data?.createdAt}
                    </Descriptions.Item>
                </Descriptions>
                <CommentList comments={data?.comments} />
            </AdminArticleDetailView>
            <AdminSpinner view={pending} />
            <AdminError view={!!error} error={error} />
        </Modal>
    );
}

function CommentList({ comments = [] }) {
    function CommentItem({ comment }) {
        return (
            <Comment
                content={comment?.content}
                datetime={
                    <Tooltip>
                        <span>{comment.createdAt}</span>
                    </Tooltip>
                }
            />
        );
    }

    const commentList = comments.map((comment) => (
        <CommentItem key={comment?.id} comment={comment} />
    ));

    return (
        <CommentListView>
            <Typography.Title level={3}>댓글 목록</Typography.Title>
            {commentList}
        </CommentListView>
    );
}

const AdminArticleDetailView = styled.div``;

const CommentListView = styled.div`
    padding-top: 2rem;
    padding-bottom: 1rem;
    padding-left: 1.2rem;
    padding-right: 1rem;
`;
