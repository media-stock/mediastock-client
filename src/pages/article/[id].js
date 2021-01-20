import React, { useState } from 'react';
import { useRouter } from 'next/router';

// helmet
import { Helmet } from 'components';
import { articleDetailHelmet as helmet } from 'config';

// redux
// import { wrapper } from 'stores';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as articleActions from 'stores/article';

import MobileArticleDetailContainer from 'container/article/detail-mobile';

export default function ArticleDetailPage() {
    const router = useRouter();
    const id = router.query?.id;

    const dispatch = useDispatch();
    const { onGetArticle } = bindActionCreators(articleActions, dispatch);

    const article = useSelector((state) => state.article.toJS()?.article);
    const { data } = article;

    React.useEffect(() => {
        if (id) onGetArticle({ id });
    }, [id]);

    return (
        <>
            <Helmet helmet={helmet(data?.title)} />
            <MobileArticleDetailContainer articleId={id} />
        </>
    );
}
