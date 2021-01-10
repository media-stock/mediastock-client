import React, { useEffect } from 'react';

// helmet
import { Helmet } from 'components';
import { moreHelmet as helmet } from 'config';

// redux
import { useDispatch } from 'react-redux';
import * as articleActions from 'stores/article';

// container
import MoreReportContainer from 'container/more/report';

export default function MorePage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(articleActions.onGetArticles());
    }, []);

    return (
        <>
            <Helmet helmet={helmet} />
            <MoreReportContainer />
        </>
    );
}
