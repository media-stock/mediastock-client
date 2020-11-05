import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

export default function FourthPage({ onEmail }) {
    const [email, setEmail] = useState('');

    const onKeyPress = useCallback((e) => {
        if (e.key === 'Enter') {
            onEmail({ email });
        }
    });

    return (
        <FourthPageView>
            <SubTitle>MEDIA STOCK</SubTitle>
            <Title>소식 알림 신청</Title>
            <Description>
                미디어스톡의 론칭 및 각종 소식을 가장 먼저 받아보고 싶으신 분께서는
                <br />
                카카오톡 플러스친구 추가 혹은 이메일 주소를 남겨주세요!
            </Description>

            <InputForm onSubmit={(e) => e.preventDefault()}>
                <InputLabel>E-Mail</InputLabel>
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={onKeyPress}
                />
            </InputForm>
        </FourthPageView>
    );
}

const FourthPageView = styled.div`
    width: 100%;
    height: 70vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #223351;
`;

const SubTitle = styled.h3`
    font-family: 'NanumSquare', sans-serif !important;
    font-size: 38px;
    font-weight: bold;
    color: #fff;
    line-height: 1;

    margin-top: 2rem;

    @media only screen and (max-width: 600px) {
        font-size: 25px;
    }
`;

const Title = styled.h1`
    font-family: 'NanumSquare', sans-serif !important;
    font-size: 65px;
    font-weight: bolder;

    line-height: 1;
    color: #fff;

    margin: 0;
    margin-top: 2rem;
    @media only screen and (max-width: 600px) {
        font-size: 35px;
    }
`;

const Description = styled.p`
    font-family: 'NanumSquare', sans-serif !important;
    font-size: 22px;

    margin: 0;
    margin-top: 1.6rem;
    color: #fff;
    text-align: center;

    @media only screen and (max-width: 600px) {
        font-size: 19px;
        padding: 0 1rem;
    }
`;

const InputForm = styled.form`
    margin-top: 2rem;
    position: relative;

    @media only screen and (max-width: 600px) {
        width: 100%;
        padding-left: 5%;
        padding-right: 5%;
    }
`;

const InputLabel = styled.label`
    padding: 0 1rem;
    position: absolute;
    top: 50%;

    border-right: 1px solid #ddd;
    transform: translateY(-50%);
`;

const Input = styled.input`
    width: 500px;
    padding: 0.4rem 80px;

    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: white;

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;
