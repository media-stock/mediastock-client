import React from 'react';
import styled from 'styled-components';

export default function MainFooter() {
    return (
        <FooterView>
            <Title href="/미디어스톡 개인정보처리방침.pdf" target="_blank">
                개인정보처리방침
            </Title>
            <Description>사업자등록번호: 413-43-00542</Description>
            <Description>E-Mail: mediastock@naver.com</Description>
            <Description>서울시 영등포구 경인로 706 한양빌딩 6248호 미디어스톡</Description>
        </FooterView>
    );
}

const FooterView = styled.div`
    padding: 1rem 2rem;

    border-top: 2px solid #fff;
    background-color: #ddd;
`;

const Title = styled.a`
    font-family: 'NanumSquare', sans-serif !important;
    font-weight: bold;
    font-size: 27px;
    color: #000;
    margin: 0;

    &:hover {
        color: #000;
    }
`;

const Description = styled.p`
    font-family: 'NanumSquare', sans-serif !important;
    font-size: 16px;
    color: #000;
    margin: 0;
`;
