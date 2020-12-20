import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'stores/auth';

// components
import {
    Helmet,
    Modal,
    LoginHeader,
    LoginForm,
    LoginInput,
    LoginButton,
    LoginToRegisterButton,
    SocialKakaoButton,
    SocialGoogleButton,
} from 'components';

// config
import { loginHelmet as helmet } from 'config';

export default function LoginContainer() {
    const router = useRouter();
    const view = router.query?.auth === 'login';

    const [input, setInput] = useState({
        email: '',
        password: '',
    });

    const dispatch = useDispatch();
    const { onLogin } = bindActionCreators(authActions, dispatch);

    const { login, logined } = useSelector((state) => ({
        login: state.auth.toJS().login,
        logined: state.user.toJS().logined,
    }));
    const { user, accessToken } = logined;
    const { pending, done, error } = login;

    const onChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setInput({ ...input, [name]: value });
        },
        [input],
    );

    const onClick = useCallback(() => {
        onLogin({ ...input });
    }, [input]);

    const onLoginToRegisterClick = useCallback(() => {
        router.replace({
            pathname: router.pathname,
            query: { ...router.query, auth: 'register' },
        });
    }, []);

    React.useEffect(() => {
        if (done) router.replace('/');
    }, [done]);

    return (
        <Modal view={view}>
            <Helmet helmet={helmet} />
            <LoginView>
                <LoginHeader />
                <LoginForm>
                    <LoginInput
                        name="email"
                        value={input.email}
                        onChange={onChange}
                        placeholder="이메일을 입력해주세요"
                    />
                    <LoginInput
                        name="password"
                        value={input.password}
                        onChange={onChange}
                        placeholder="비밀번호를 입력해주세요"
                    />

                    <LoginButton onClick={onClick} loading={pending} />
                    <LoginToRegisterButton onClick={onLoginToRegisterClick} />

                    <SocialKakaoButton />
                    <SocialGoogleButton />
                </LoginForm>
            </LoginView>
        </Modal>
    );
}

const LoginView = styled.div`
    width: 100%;
    height: 85vh;

    border: 2px solid #415982;
    background-color: white;
    overflow: hidden;
`;
