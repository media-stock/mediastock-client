import styled from 'styled-components';
import { Input } from 'lib/styles';

export const LoginInput = styled(Input)`
    width : 100%;
    margin-bottom : 1rem;

    &:nth-child(2){
        margin-bottom : 0;
    }
`;