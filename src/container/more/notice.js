import React, { useState } from 'react';

import { Header, ArticleList } from 'components';
import { UILoading, UITabView } from 'ui';

// redudx
import { useSelector } from 'react-redux';

export default function MoreNoticeContainer() {
    const [currentPage, setCurrentPage] = useState(0);

    const articles = useSelector((state) => state.article.toJS().articles);
    const { data, pending, error } = articles;

    return (
        <>
            <Header logo="공지사항" />
            <UILoading view={pending} />

            <UITabView
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                labels={['공지', '이벤트']}
            >
                <ArticleList articles={data} />
                <ArticleList articles={data} />
            </UITabView>
        </>
    );
}
