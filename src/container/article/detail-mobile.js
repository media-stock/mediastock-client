import React, { useState, useCallback } from 'react';
// import { useRouter } from 'next/router';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as articleActions from 'stores/article';

// components
import {
    ArticleDetailHeader,
    ArticleDetailContent,
    ArticleDetailCommentList,
    ArticleDetailCommentInput,
} from 'components';

export default function MobileArticleDetailContainer() {
    const [content, setContent] = useState('');

    const dispatch = useDispatch();
    const { onCreateArticleComment } = bindActionCreators(articleActions, dispatch);

    const { article } = useSelector((state) => ({
        article: state.article?.toJS().article,
    }));
    const { data } = article;

    const onChange = useCallback(
        (e) => {
            const { value } = e.target;
            setContent(value);
        },
        [content],
    );

    const onCreate = useCallback(() => {
        if (content !== '') onCreateArticleComment({ id: data?.id, content });
    }, [content]);

    return (
        <>
            <ArticleDetailHeader article={data} />
            <ArticleDetailContent article={data} />
            <ArticleDetailCommentList article={data} />

            <ArticleDetailCommentInput value={content} onChange={onChange} onCreate={onCreate} />
        </>
    );
}
