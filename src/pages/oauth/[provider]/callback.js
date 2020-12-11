import React from 'react';
import { useRouter } from 'next/router';

// redux
import { useDispatch } from 'react-redux';
import * as userActions from 'stores/user';

// utils
import { getJWTDecoded } from 'lib/utils';

export default function OAuthCallbackPage({ provider }) {
    const router = useRouter();
    const { query } = router;
    const accessToken = query?.code;

    const dispatch = useDispatch();
    const setLogined = () => {
        dispatch(userActions.setAccessToken(accessToken));

        const decoded = getJWTDecoded(accessToken);
        const user = decoded?.user;
        dispatch(userActions.setUser(user));
    };

    React.useEffect(() => {
        if (typeof window !== 'undefined') setLogined();
    }, [typeof window]);

    return (
        <div>
            <p>{accessToken}</p>
            <p>{provider}</p>
        </div>
    );
}

export async function getServerSideProps({ params }) {
    const { provider } = params;
    return { props: { provider } };
}
