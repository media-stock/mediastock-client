import React from 'react';
import * as styled from './styled';

export default function SocialButton({ type, text, onClick = () => {} }){
    return(
        <styled.SocialButton onClick={()=>onClick(type)}>
            {text}
        </styled.SocialButton>
    )
}