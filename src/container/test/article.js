import React, { useState, useCallback } from 'react';
import { TestObject } from 'components';
import { Input } from 'antd';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as articleActions from 'stores/article';

export default function TestArticles() {
    const [id, setId] = useState(0);

    const dispatch = useDispatch();
    const onGetArticle = bindActionCreators(articleActions.onGetArticle, dispatch);

    const { article } = useSelector((state) => ({
        article: state.article?.toJS().article,
    }));

    React.useEffect(() => {
        onGetArticle({ id });
    }, [id]);

    const onChange = useCallback((e) => {
        const { value } = e.target;
        setId(value);
    });

    return (
        <>
            <Input style={{ margin: '2rem 0' }} value={id} onChange={onChange} />
            <TestObject data={article?.data} />
        </>
    );
}
