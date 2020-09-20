import React from 'react';
import { wrapper } from 'stores';

// container
import RegisterContainer from 'container/auth/register';

// helmet
import { Helmet } from 'components';
import { registerHelmet as helmet } from 'config';

export default function RegisterPage() {
    return (
        <>
            <Helmet helmet={helmet} />
            <RegisterContainer />
        </>
    );
}
