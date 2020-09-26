import React, { useCallback } from 'react';
import Router from 'next/router';

// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from 'stores/auth';

// components
import { Loading, LoginForm, LoginInput, LoginButton, SocialWrapper, SocialButton } from 'components';

function LoginContainer({ authState, authActions }) {
    const { login, social } = authState;
    const { input, pending, done, error } = login;
    const { setLoginInput, onLogin, onSocial } = authActions;

    const setInput = useCallback((e)=>{
        setLoginInput(e.target);
    });

    const redirectSocial = useCallback((type)=>{
        onSocial(type);
    });
    
    return(
        <>
            <LoginForm>
                <LoginInput
                    name="email"
                    value={input.email}
                    onChange={setInput}
                    placeholder={"email"}/>
                <LoginInput
                    name="password"
                    value={input.password}
                    onChange={setInput}
                    placeholder={"password"}/>
                <LoginButton onLogin={onLogin} pending={pending}/>

                <SocialWrapper>
                    <SocialButton type="google" text="구글로 로그인하기" onClick={redirectSocial}/>
                    <SocialButton type="naver" text="네이버로 로그인하기" onClick={redirectSocial}/>
                    <SocialButton type="kakao" text="카카오로 로그인하기" onClick={redirectSocial}/>
                    <SocialButton type="facebook" text="페이스북으로 로그인하기" onClick={redirectSocial}/>
                </SocialWrapper>
            </LoginForm>
            <Loading view={pending}/>
        </>
    );
}

export default connect(
    (state) => ({
        authState : state.auth.toJS()
    }),
    (dispatch) => ({
        authActions : bindActionCreators(authActions, dispatch)
    }),
)(LoginContainer);
