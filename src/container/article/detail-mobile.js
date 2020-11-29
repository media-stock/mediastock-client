import React from 'react';
import { useRouter } from 'next/router';

// redux
import { useSelector } from 'react-redux';

// components

export default function MobileArticleDetailContainer() {
    const router = useRouter();
    const mobile = router.query?.mobile === 'true';
    if (!mobile) return null;

    const { article } = useSelector((state) => ({
        article: state.article?.toJS().article,
    }));
    const { data } = article;

    return (
        <>
            <span>{JSON.stringify(data)}</span>
        </>
    );
}
