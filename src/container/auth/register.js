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
    RegisterHeader,
    RegisterForm,
    RegisterInput,
    RegisterButton,
    RegisterToLoginButton,
    SocialKakaoButton,
    SocialGoogleButton,
} from 'components';

// config
import { registerHelmet as helmet } from 'config';

export default function RegisterContainer() {
    const router = useRouter();
    const view = router.query?.auth === 'register';

    const [input, setInput] = useState({
        email: '',
        password: '',
        name: '',
    });

    const dispatch = useDispatch();
    const { onRegister } = bindActionCreators(authActions, dispatch);

    const { register, logined } = useSelector((state) => ({
        register: state.auth.toJS().register,
        logined: state.user.toJS().logined,
    }));
    const { user, accessToken } = logined;
    const { pending, done, error } = register;

    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    });

    const onClick = useCallback(() => {
        onRegister({ ...input });
    });

    const onRegisterToLoginClick = useCallback(() => {
        router.replace({
            pathname: router.pathname,
            query: { ...router.query, auth: 'login' },
        });
    }, []);

    React.useEffect(() => {
        if (done)
            router.replace({
                pathname: router.pathname,
                query: { ...router.query, auth: 'login' },
            });
    }, [done]);

    if (!view) return null;

    return (
        <Modal view={view}>
            <Helmet helmet={helmet} />
            <RegisterView>
                <RegisterHeader />
                <RegisterForm>
                    <RegisterInput
                        name="email"
                        value={input.email}
                        onChange={onChange}
                        placeholder="이메일을 입력해주세요"
                    />
                    <RegisterInput
                        name="password"
                        value={input.password}
                        onChange={onChange}
                        placeholder="비밀번호를 입력해주세요"
                    />

                    <RegisterInput
                        name="name"
                        value={input.name}
                        onChange={onChange}
                        placeholder="이름를 입력해주세요"
                    />

                    <RegisterButton onClick={onClick} loading={pending} />
                    <RegisterToLoginButton onClick={onRegisterToLoginClick} />

                    <SocialKakaoButton />
                    <SocialGoogleButton />
                </RegisterForm>
            </RegisterView>
        </Modal>
    );
}

const RegisterView = styled.div`
    width: 100%;
    height: 85vh;

    border: 2px solid ${(props) => props.theme.primaryColor};
    background-color: white;
    overflow: hidden;
`;
