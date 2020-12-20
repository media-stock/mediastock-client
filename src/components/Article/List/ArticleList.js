import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

// style
import styled from 'styled-components';
import { UIHeaderText, UIText } from 'ui';

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
            <UIHeaderText size="h3">{article?.title}</UIHeaderText>
            <UIText>{article?.content?.slice(0, 20)}</UIText>
            <InfoView>
                <Date info>{article?.createdAt}</Date>
                <Username info>{article?.user?.name}</Username>
            </InfoView>
        </ArticleItemView>
    );
}

const ArticleListView = styled.div``;

const ArticleItemView = styled.div`
    padding: 0.5rem 1rem;

    border-bottom: 1px solid #ddd;
    cursor: pointer;
`;

const InfoView = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Date = styled(UIText)``;

const Username = styled(UIText)`
    margin-left: 5px;
`;
