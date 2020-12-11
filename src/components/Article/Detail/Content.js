import React from 'react';
import styled from 'styled-components';

export default function ArticleDetailContent({ article }) {
    return (
        <ContentView>
            <Content>{article?.content}</Content>
        </ContentView>
    );
}

const ContentView = styled.div`
    width: 100%;
    min-height: 35vh;
    margin-top: 30px;
    padding: 0 10px;

    border-bottom: 1px solid #eee;
`;

const Content = styled.div`
    width: 100%;

    font-size: ${(props) => props.theme.fontSizeNormal};
    font-weight: normal;
    color: #222;
`;
