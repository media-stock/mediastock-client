import React, { useCallback, useState } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'stores/auth';

// components
import { LoginForm, LoginInput, LoginButton } from 'components';

export default function LoginContainer() {
    const [input, setInput] = useState({
        email: '',
        password: '',
    });

    const dispatch = useDispatch();
    const { onLogin } = bindActionCreators(authActions, dispatch);

    const { login } = useSelector((state) => ({
        login: state.auth.toJS().login,
    }));
    const { pending, done, error } = login;

    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    });

    const onClick = useCallback(() => {
        onLogin({ ...input });
    });

    return (
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
        </LoginForm>
    );
}
