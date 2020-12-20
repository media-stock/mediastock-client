import styled from 'styled-components';

export const UIButton = styled.button`
    padding: 7px 16px;
    border: none;
    border-radius: 4px;
    outline: none;

    ${(props) => {
        const theme = props?.theme;
        const type = props?.type;

        if (type) {
            if (type === 'red')
                return `color: white;
                background-color: ${theme.redColor};`;

            if (type === 'blue')
                return `color: white;
                background-color: ${theme.blueColor};`;

            if (type === 'primary')
                return `color: white;
                background-color: ${theme.primaryColor};`;
        }

        return `
            border: 1px solid ${theme.primaryColor};
            background-color: transparent;
            color: ${theme.primaryColor};
        `;
    }}
`;
