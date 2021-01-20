import React from 'react';

// helmet
import { Helmet } from 'components';
import { articleUploadHelmet as helmet } from 'config';

// container
import ArticleUploadContainer from 'container/article/upload-mobile';

export default function ArticleUploadPage() {
    return (
        <>
            <Helmet helmet={helmet} />
            <ArticleUploadContainer />
        </>
    );
}
