/* eslint-disable camelcase */
import React from 'react';
import { API_URL } from 'config';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from 'stores/user';

// utils
import { getJWTDecoded } from 'lib/utils';

export default function OAuthCallbackPage({ provider, accessToken, error }) {
    const dispatch = useDispatch();
    const { setUser, setAccessToken } = bindActionCreators(userActions, dispatch);

    const { logined } = useSelector((state) => ({
        logined: state.user.toJS().logined,
    }));

    const setLogined = () => {
        setAccessToken(accessToken);
        setUser(getJWTDecoded(accessToken));
    };

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            if (accessToken) {
                setLogined();
            }

            if (provider && error) {
                const REGISTER_URL = `${API_URL}/oauth/${provider}/register`;
                window.location.href = REGISTER_URL;
            }
        }
    }, [accessToken, provider, error]);

    return (
        <div>
            <p>{JSON.stringify(logined?.user)}</p>
            <p>{logined?.accessToken}</p>
        </div>
    );
}

export async function getServerSideProps({ query }) {
    const { provider, accessToken, error } = query;
    return { props: { provider, accessToken, error } };
}
