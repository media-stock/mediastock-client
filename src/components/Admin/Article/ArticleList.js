import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as articleActions from 'stores/article';

// components
import { AdminTable, AdminButton, Spinner, AdminError } from 'components';

const columns = () => [
    {
        title: 'Article ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '제목',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: '내용',
        dataIndex: 'content',
        key: 'content',
    },
    {
        title: '사용자',
        dataIndex: 'user',
        key: 'user',
        render: (user) => user?.name,
    },
    {
        title: 'board?',
        dataIndex: 'board',
        key: 'board',
        render: (board) => JSON.stringify(board),
    },
];

export default function ArticleList() {
    const router = useRouter();
    const subPage = router.query?.subPage;
    if (subPage !== 'list') return null;

    const dispatch = useDispatch();
    const { setPage, onGetArticles } = bindActionCreators(articleActions, dispatch);

    const { articles } = useSelector((state) => ({
        articles: state.article.toJS().articles,
    }));
    const { data, dataCount, page, offset, pending, error } = articles;

    const onItemClick = useCallback((id) => {
        router.push({
            pathname: '/admin',
            query: { ...router.query, articleId: id },
        });
    });

    const onCreateClick = useCallback(() => {
        router.push({
            pathname: '/admin',
            query: { ...router.query, create: true },
        });
    });

    const setPagination = (state) => {
        const { page, offset } = state;
        setPage({ page: 0, offset, type: 'articles' });
    };

    const onReload = () => {
        setPage({ page: 0, offset, type: 'articles' });
        onGetArticles();
    };

    React.useEffect(() => {
        onReload();
    }, [subPage]);

    return (
        <>
            <AdminButton
                createText="게시판 추가"
                onCreate={onCreateClick}
                reloadText="게시판 새로고침"
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
            <Spinner view={pending} />
            <AdminError error={error} />
        </>
    );
}
