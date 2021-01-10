import React, { useState } from 'react';

// ui
import { UILoading, UITabView } from 'ui';

// components
import { Header, ArticleList } from 'components';

// redux
import { useSelector } from 'react-redux';

export default function MoreNoticeContainer() {
    const [currentPage, setCurrentPage] = useState(0);

    const articles = useSelector((state) => state.article?.toJS().articles);
    const { data, pending, error } = articles;

    return (
        <>
            <Header logo="분석 리포트" />
            <UILoading view={pending} />

            <UITabView
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                labels={['공지', 'NOW']}
            >
                <ArticleList articles={data} />
                {/* <ArticleList articles={data} /> */}
                <p>NOW</p>
            </UITabView>
        </>
    );
}
