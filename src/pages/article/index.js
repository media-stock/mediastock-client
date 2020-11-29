import React from 'react';

// helmet
import { Helmet } from 'components';
import { articleListHelmet as helmet } from 'config';

// redux
import { wrapper } from 'stores';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as articleActions from 'stores/article';

// container
import MobileArticleListContainer from 'container/article/list-mobile';

export default function ArticleList({ article }) {
    const dispatch = useDispatch();
    const { setState } = bindActionCreators(articleActions, dispatch);

    React.useEffect(() => {
        setState(article);
    }, [article]);

    return (
        <>
            <Helmet helmet={helmet()} />
            <MobileArticleListContainer />
        </>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store, req, res, ...etc }) => {
        // console.log(`getServerSideProps`, store.getState());
        const { dispatch, getState } = store;
        await dispatch(articleActions.onGetArticles());

        const article = getState()?.article.toJS();

        return {
            props: { article },
        };
    },
);
