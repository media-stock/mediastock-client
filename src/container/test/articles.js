import React from 'react';
import { TestList } from 'components';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as articleActions from 'stores/article';

export default function TestArticles() {
    const dispatch = useDispatch();
    const onGetArticles = bindActionCreators(articleActions.onGetArticles, dispatch);

    const { articles } = useSelector((state) => ({
        articles: state.article?.toJS().articles,
    }));

    React.useEffect(() => {
        onGetArticles();
    }, []);

    return <TestList datas={articles.data} />;
}
