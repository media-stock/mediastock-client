import React, { useState } from 'react';

// redux
import { useSelector } from 'react-redux';

// components
import {
    Header,
    ArticleList,
    ArticleListSearch,
    ArticleListTabView,
    ArticleListRightIcon,
} from 'components';

export default function MobileArticleListContainer() {
    const [sort, setSort] = useState(0);

    const articles = useSelector((state) => state.article.toJS().articles);
    const { data, pending, error } = articles;

    return (
        <>
            <Header logo={`Media's Talk`} />
            <ArticleListRightIcon />

            <ArticleListSearch />
            <ArticleListTabView sort={sort} setSort={setSort} />
            <ArticleList articles={data} />
        </>
    );
}
