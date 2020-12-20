import React from 'react';

// helmet
import { Helmet } from 'components';
import { moreHelmet as helmet } from 'config';

// container
import MoreQuestionContainer from 'container/more/question';

export default function MorePage() {
    return (
        <>
            <Helmet helmet={helmet} />
            <MoreQuestionContainer />
        </>
    );
}
