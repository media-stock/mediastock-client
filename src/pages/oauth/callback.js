import React from 'react';
import { useRouter } from 'next/router';
import { API_URL } from 'config';

// redux
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from 'stores/user';

// utils
import { getJWTDecoded } from 'lib/utils';

export default function OAuthCallbackPage() {
    const router = useRouter();

    const { query } = router;
    const accessToken = query?.access_token;
    const provider = query?.provider;
    const error = query?.error;

    // console.log(query);

    const dispatch = useDispatch();
    const { setUser, setAccessToken } = bindActionCreators(userActions, dispatch);

    const setLogined = () => {
        setAccessToken(accessToken);
        setUser(getJWTDecoded(accessToken));
    };

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            // console.log(`useEffect`, router.query);

            if (accessToken) {
                setLogined();
            }

            if (error) {
                window.location.href = `${API_URL}/oauth/${provider}/register`;
            }
        }
    }, [typeof window, query]);

    return (
        <div>
            <p>{accessToken}</p>
        </div>
    );
}
