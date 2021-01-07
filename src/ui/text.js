import styled from 'styled-components';

export const UIHeaderText = styled.h1`
    font-size: ${(props) => props.theme.fontSizeH1};
    font-weight: bold;
    color: ${(props) => props.theme.textBoldColor};

    ${(props) => {
        const theme = props?.theme;
        const size = props?.size;

        if (size === 'h1') return `font-size: ${theme.fontSizeH1}`;
        if (size === 'h2') return `font-size: ${theme.fontSizeH2}`;
        if (size === 'h3') return `font-size: ${theme.fontSizeH3}`;
        if (size === 'h4') return `font-size: ${theme.fontSizeH4}`;
        if (size === 'h5') return `font-size: ${theme.fontSizeH5}`;
    }}
`;

export const UIText = styled.p`
    font-size: ${(props) => props.theme.fontSizeNormal};
    font-weight: normal;

    ${(props) => {
        const theme = props?.theme;
        const type = props?.type;
        if (type) {
            if (type === 'red') return `color: ${theme.redColor};`;
            if (type === 'blue') return `color: ${theme.blueColor};`;
            if (type === 'primary') return `color: ${theme.primaryColor};`;
        } else {
            return `color: ${theme.textColor};`;
        }
    }}

    ${(props) => {
        const theme = props?.theme;
        const info = props?.info;

        if (info) return `font-size: ${theme.fontSizeInfo}; color: ${theme.infoTextColor};`;
        return ``;
    }}
`;

export const UIAccentText = styled.span`
    font-weight: bold;
    color: ${(props) => props.theme.primaryColor};
`;
