import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export default function LoginHeader() {
    const router = useRouter();

    const onBack = useCallback(() => {
        router.back();
    }, [router]);

    return (
        <HeaderView>
            <HeaderText>로그인 선택</HeaderText>
            <CloseButton onClick={onBack}>X</CloseButton>
        </HeaderView>
    );
}

const HeaderView = styled.div`
    width: 100%;
    height: 50px;
    padding: 0 20px;

    display: flex;
    align-items: center;

    background-color: #415982;
`;

const HeaderText = styled.p`
    color: white;
    font-size: 15px;
`;

const CloseButton = styled.p`
    margin-left: auto;

    color: white;
    font-size: 17px;
`;
