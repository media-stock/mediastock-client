import styled from 'styled-components';

export const SocialButton = styled.button`
    width : 170px;
    margin-left : auto;
    margin-bottom : 1rem;
    padding : 0.6rem 1.2rem;

    outline : none;
    border : 0;
    border-radius : 8px;
    cursor : pointer;
    
    &:nth-child(odd){
        margin-left : 0;
    }

    &:nth-last-child(1){
        margin-bottom : 0;
    }

    &:nth-last-child(2){
        margin-bottom : 0;
    }
`;

export const SocialWrapper = styled.div`
    width : 100%;
    margin-top : 2rem;

    display : flex;
    flex-wrap : wrap;
`;