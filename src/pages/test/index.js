import React, { useState } from 'react';

// containers
import TestArticlesContainer from 'container/test/articles';
import TestArticleContainer from 'container/test/article';

// components
import { Helmet, TestCascader } from 'components';

// config
import { testHelmet as helmet } from 'config';

const dev = process.env.NODE_ENV === 'development';

export default function TestPage() {
    const [label, setLabel] = useState(null);

    // if (!dev) return null;

    return (
        <>
            <Helmet helmet={helmet} />
            <TestCascader label={label} setLabel={setLabel} />

            {label === 'articles' && <TestArticlesContainer />}
            {label === 'article' && <TestArticleContainer />}
        </>
    );
}
