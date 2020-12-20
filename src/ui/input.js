import styled from 'styled-components';

export const UIInput = styled.input`
    width: 100%;
    padding: 7px 17px;
    background-color: rgb(225, 225, 225);

    font-size: ${(props) => props.theme.textColor};
    border: none;
    border-radius: 17px;
    outline: none;
`;
