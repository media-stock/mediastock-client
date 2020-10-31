import React from 'react';

// container
import LoginContainer from 'container/auth/login';

// config
import { Helmet } from 'components';
import { loginHelmet as helmet } from 'config';

export default function LoginPage() {
    return (
        <>
            <Helmet helmet={helmet} />
            <LoginContainer />
        </>
    );
}
