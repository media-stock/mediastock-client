import React from 'react';
import { useRouter } from 'next/router';

// redux
import { useSelector } from 'react-redux';

// components
import { ArticleList, ArticleListSearch } from 'components';

export default function MobileArticleListContainer() {
    const { articles } = useSelector((state) => ({
        articles: state.article.toJS().articles,
    }));
    const { data, pending, error } = articles;

    return (
        <>
            <ArticleListSearch />
            <ArticleList articles={data} />
        </>
    );
}
