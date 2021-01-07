import React, { useState, useCallback, useEffect } from 'react';
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

export default function MobileArticleDetailContainer({ articleId }) {
    const [content, setContent] = useState('');

    const dispatch = useDispatch();
    const { onGetArticle, onCreateArticleComment } = bindActionCreators(articleActions, dispatch);

    const { article, createComment } = useSelector((state) => ({
        article: state.article?.toJS().article,
        createComment: state.article?.toJS().createComment,
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

    useEffect(() => {
        if (createComment?.done) onGetArticle({ id: articleId });
    }, [createComment?.done]);

    console.log(`ArticleData`, data);

    return (
        <>
            <ArticleDetailHeader article={data} />
            <ArticleDetailContent article={data} />
            <ArticleDetailCommentList comments={data?.comments} />

            <ArticleDetailCommentInput value={content} onChange={onChange} onCreate={onCreate} />
        </>
    );
}
