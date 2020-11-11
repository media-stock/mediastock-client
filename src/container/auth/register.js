import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'stores/auth';

// components
import { RegisterForm, RegisterInput, RegisterButton } from 'components';

export default function RegisterContainer() {
    const router = useRouter();
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

    React.useEffect(() => {
        if (done) {
            router.replace('/auth/login');
        }
    }, [done]);

    return (
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
        </RegisterForm>
    );
}
