import React from 'react';
import { useRouter } from 'next/router';

// redux
import { useSelector } from 'react-redux';

// components
import {
    ArticleDetailHeader,
    ArticleDetailContent,
    ArticleDetailCommentList,
    ArticleDetailCommentInput,
} from 'components';

export default function MobileArticleDetailContainer() {
    const { article } = useSelector((state) => ({
        article: state.article?.toJS().article,
    }));
    const { data } = article;

    return (
        <>
            <ArticleDetailHeader article={data} />
            <ArticleDetailContent article={data} />
            <ArticleDetailCommentList article={data} />

            <ArticleDetailCommentInput />
        </>
    );
}
