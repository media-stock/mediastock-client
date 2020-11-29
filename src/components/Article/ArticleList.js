import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export default function ArticleList({ articles = [] }) {
    const articleList = articles?.map((article) => (
        <ArticleItem key={article?.id} article={article} />
    ));

    return <ArticleListView>{articleList}</ArticleListView>;
}

function ArticleItem({ article }) {
    const router = useRouter();

    const onItemClick = useCallback(() => {
        router.push({
            pathname: `/article/${article?.id}`,
            query: { ...router.query },
        });
    }, [article]);

    return (
        <ArticleItemView onClick={onItemClick}>
            <Title>{article?.title}</Title>
            <Content>{article?.content?.slice(0, 20)}</Content>
        </ArticleItemView>
    );
}

const ArticleListView = styled.div``;

const ArticleItemView = styled.div`
    padding: 0.5rem 1rem;

    border-bottom: 1px solid #ddd;
    cursor: pointer;
`;

const Title = styled.h1`
    margin: 0;
    margin-bottom: 7px;
`;

const Content = styled.p`
    margin: 0;
`;
