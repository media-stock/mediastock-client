import React from 'react';
import { useRouter } from 'next/router';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as articleActions from 'stores/article';

// components
import { AdminTable } from 'components';

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

export default function ArticleList({ subPage }) {
    if (subPage !== 'list') return null;

    const router = useRouter();

    const dispatch = useDispatch();
    const { setArticleReset, setArticlePage, onGetArticles } = bindActionCreators(
        articleActions,
        dispatch,
    );

    const { articles } = useSelector((state) => ({
        articles: state.article.toJS().articles,
    }));
    const { data, dataCount, pending, limit, offset } = articles;

    const onItemClick = React.useCallback((id) => {
        router.push({
            pathname: '/admin',
            query: { ...router.query, articleId: id },
        });
    });

    React.useEffect(() => {
        if (offset === 0) setArticleReset();
        onGetArticles();
    }, [limit, offset]);

    return (
        <>
            <AdminTable
                columns={columns}
                data={data}
                dataCount={dataCount}
                pending={pending}
                limit={limit}
                offset={offset}
                setPage={setArticlePage}
                onItemClick={onItemClick}
            />
        </>
    );
}
