import { Checkbox } from 'antd';
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

export default function FourthPage({ onEmail, isMobile, setError }) {
    const [check, setCheck] = useState(false);
    const [email, setEmail] = useState('');

    const onEmailClick = useCallback(() => {
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const isEmail = re.test(email);

        if (check && email !== '' && isEmail) {
            onEmail({ email });
        } else if (!check) {
            setError('개인정보처리방침 동의를 해주세요');
        } else if (email === '') {
            setError('이메일을 채워주세요');
        } else if (!isEmail) {
            setError('이메일 형식이 올바르지 않습니다.');
        }
    });

    const onKeyPress = useCallback((e) => {
        if (e.key === 'Enter') {
            onEmailClick();
        }
    });

    return (
        <FourthPageView>
            <SubTitle>MEDIA STOCK</SubTitle>
            <Title>소식 알림 신청</Title>
            <Description>
                미디어스톡의 론칭 및 각종 소식을 {isMobile && <br />}
                가장 먼저 받아보고 싶으신분께서는
            </Description>
            <Description>
                카카오톡 플러스친구 추가 {isMobile && <br />}
                <KakaoImageView href="https://pf.kakao.com/_lVxjGK" target="_blank">
                    <KakaoImage src="/kakao-channel.png" />
                </KakaoImageView>
                <br />
                혹은 이메일 주소를 남겨주세요!
            </Description>

            <InputForm onSubmit={(e) => e.preventDefault()}>
                <InputLabel>E-Mail</InputLabel>
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={onKeyPress}
                />
            </InputForm>

            <AgreeView>
                <Agree>개인정보처리방침 동의</Agree>
                <Checkbox style={{ marginTop: '-1px' }} onChange={() => setCheck(!check)} />
            </AgreeView>

            <OkButton onClick={onEmailClick}>확인</OkButton>
        </FourthPageView>
    );
}

const FourthPageView = styled.div`
    width: 100%;
    min-height: 70vh;

    padding-top: 2rem;
    padding-bottom: 2rem;

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
        font-size: 16.5px;
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

const AgreeView = styled.div`
    margin-top: 2rem;

    display: flex;
    align-items: center;

    color: #fff;
`;

const Agree = styled.p`
    margin: 0;
    margin-right: 0.6rem;

    font-size: 1.2rem;
`;

const OkButton = styled.button`
    margin-top: 1.5rem;
    padding: 0.3rem 0.9rem;

    font-size: 1.8rem;
    font-weight: bold;

    background-color: #fff;

    border: 3px solid #ddd;
    border-radius: 22px;
    outline: none;
    cursor: pointer;

    @media only screen and (max-width: 600px) {
        font-size: 1.4rem;
        padding: 0.2rem 0.7rem;
    }
`;

const KakaoImageView = styled.a`
    display: inline;
`;

const KakaoImage = styled.img`
    height: 30px;

    margin-top: 10px;
    margin-bottom: 10px;
    object-fit: contain;
`;
