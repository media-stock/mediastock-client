import React from 'react';
import * as styled from './styled';

export default function LoginButton({ onLogin }){
    return(
        <styled.LoginButton onClick={onLogin}>
            로그인
        </styled.LoginButton>
    )
}