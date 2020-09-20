import React from 'react';
import * as styled from './styled';

export default function LoginInput({ name, value, onChange, placeholder}){
    return(
        <styled.LoginInput
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}/>
    )
}