import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';
import { UIButton } from 'ui';

export default function KakaoButton() {
    return (
        <Link href="/oauth/kakao">
            <KakaoView>
                <Kakao>카카오로 로그인하기</Kakao>
            </KakaoView>
        </Link>
    );
}

const KakaoView = styled.div`
    width: 100%;

    margin-top: 30px;
`;

const Kakao = styled(UIButton)`
    width: 100%;

    color: ${(props) => props.theme.textBoldColor};
    background-color: yellow;
    border: 0;
`;
