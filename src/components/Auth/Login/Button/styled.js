import styled from 'styled-components';
import { Button } from 'lib/styles';

export const LoginButton = styled(Button)`
    width : 100%;
    margin-top : 3.5rem;

    background-color : ${props=>props.theme.primaryColor};
`; 