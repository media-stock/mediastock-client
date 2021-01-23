import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { UIHeaderText, UIText } from 'ui';
import { getDateAll } from 'lib';

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
            <Title size="h3">{article?.title}</Title>
            <Content>{article?.content?.slice(0, 20)}</Content>
            <InfoView>
                <Date info>{getDateAll(article?.createdAt)}</Date>
                <Username info>{article?.user?.name}</Username>
            </InfoView>
        </ArticleItemView>
    );
}

const ArticleListView = styled.div`
    margin: 12px 0;
`;

const ArticleItemView = styled.div`
    padding: 0.75rem 1rem;

    border-bottom: 1px solid #ddd;
    cursor: pointer;

    &:first-child {
        margin-top: 22px;
    }

    &:last-child {
        border-bottom: 0;
    }
`;

const InfoView = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Title = styled(UIHeaderText)`
    margin-bottom: 10px;
`;

const Content = styled(UIText)`
    margin-bottom: 5px;
`;

const Date = styled(UIText)``;

const Username = styled(UIText)`
    margin-left: 5px;
`;
