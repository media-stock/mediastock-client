import React, { useState } from 'react';

// helmet
import { Helmet } from 'components';
import { articleDetailHelmet as helmet } from 'config';

// redux
import { wrapper } from 'stores';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as articleActions from 'stores/article';

import MobileArticleDetailContainer from 'container/article/detail-mobile';

export default function ArticleDetailPage({ article }) {
    const data = article?.article?.data;

    const dispatch = useDispatch();
    const { setState } = bindActionCreators(articleActions, dispatch);

    React.useEffect(() => {
        setState(article);
    }, [article]);

    return (
        <>
            <Helmet helmet={helmet(data?.title)} />
            <MobileArticleDetailContainer />
        </>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store, req, res, params }) => {
        // console.log(`getServerSideProps`, store.getState());
        const { id } = params;

        const { dispatch, getState } = store;
        await dispatch(articleActions.onGetArticle({ id }));

        const article = getState()?.article.toJS();

        return {
            props: { article },
        };
    },
);
