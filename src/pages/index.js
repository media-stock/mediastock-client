import React from 'react';

// container
import IndexContainer from 'container/index';

// components
import { ReactHelmet } from 'components';
import { defaultHelmet as helmet } from 'config';

export default function IndexPage(props) {

    return (
        <>
            <ReactHelmet helmet={helmet} />
            <IndexContainer/>
        </>
    );
}