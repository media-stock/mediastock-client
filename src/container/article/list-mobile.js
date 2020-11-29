import React from 'react';
import { useRouter } from 'next/router';

// redux
import { useSelector } from 'react-redux';

// components
import { ArticleList } from 'components';

export default function MobileArticleListContainer() {
    const router = useRouter();
    const mobile = router.query?.mobile === 'true';
    if (!mobile) return null;

    const { articles } = useSelector((state) => ({
        articles: state.article.toJS().articles,
    }));
    const { data, pending, error } = articles;

    return (
        <>
            <ArticleList articles={data} />
        </>
    );
}
