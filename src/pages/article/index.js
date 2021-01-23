import React from 'react';

// helmet
import { Helmet } from 'components';
import { articleListHelmet as helmet } from 'config';

// redux
import { wrapperComponent } from 'stores';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as articleActions from 'stores/article';

// container
import MobileArticleListContainer from 'container/article/list-mobile';

function ArticleList() {
    const dispatch = useDispatch();
    const { onGetArticles } = bindActionCreators(articleActions, dispatch);

    React.useEffect(() => {
        onGetArticles();
    }, []);

    return (
        <>
            <Helmet helmet={helmet()} />
            <MobileArticleListContainer />
        </>
    );
}

export default wrapperComponent(ArticleList);
