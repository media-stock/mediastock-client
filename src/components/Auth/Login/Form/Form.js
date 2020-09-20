import React from 'react';
import * as styled from './styled';

export default function LoginForm({ children }){
    return(
        <styled.LoginForm onSubmit={e=>e.preventDefault()}>
            {children}
        </styled.LoginForm>
    )
}