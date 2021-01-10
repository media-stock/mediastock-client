import React, { useEffect } from 'react';

// helmet
import { Helmet } from 'components';
import { moreHelmet as helmet } from 'config';

// redux
import { useDispatch } from 'react-redux';
import * as articleActions from 'stores/article';

// container
import MoreNoticeContainer from 'container/more/notice';

export default function MorePage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(articleActions.onGetArticles());
    }, []);

    return (
        <>
            <Helmet helmet={helmet} />
            <MoreNoticeContainer />
        </>
    );
}
