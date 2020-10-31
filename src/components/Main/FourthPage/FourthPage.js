import React from 'react';
import styled from 'styled-components';
import { Checkbox } from 'antd';

export default function FourthPage({ onEmail }) {
    return (
        <FourthPageView>
            <Cover src="/static/main/main-cover4.jpg" />
            <FourthPageContent>
                <SubTitle>
                    <Accent>Media Stoc</Accent>k
                </SubTitle>
                <Title>소식 알림 신청</Title>
                <Description>
                    미디어스톡의 소식을 받아보고 싶으신 분들을 위해 알림 서비스를 신청받고 있습니다.
                </Description>

                <InputForm>
                    <InputTopWrapper>
                        <InputLabel>이메일</InputLabel>
                        <Input />
                    </InputTopWrapper>
                    <InputBottomWrapper>
                        <InputDescription>
                            이메일 수신에 관한 개인처리방침에 동의합니다.
                        </InputDescription>
                        <Checkbox style={{ marginLeft: 'auto', marginRight: '15px' }} />
                    </InputBottomWrapper>

                    <OKButton onClick={onEmail}>확인</OKButton>
                </InputForm>
            </FourthPageContent>
        </FourthPageView>
    );
}

const FourthPageView = styled.div`
    width: 100%;
    height: 100vh;

    position: relative;
`;

const FourthPageContent = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
`;

const Cover = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: cover;

    opacity: 0.4;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`;

const SubTitle = styled.h3`
    font-size: 38px;
    font-weight: bold;
    line-height: 1;
    margin: 0;
`;

const Accent = styled.span`
    color: red;
`;

const Title = styled.h1`
    font-size: 65px;
    font-weight: bolder;
    line-height: 1;
    margin: 0;
    margin-top: 10px;
`;

const Description = styled.p`
    font-size: 22px;
    margin-top: 15px;
`;

const InputForm = styled.form``;

const InputTopWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

const InputBottomWrapper = styled(InputTopWrapper)`
    width: 400px;

    margin-top: 12px;
    margin-left: auto;
`;

const InputLabel = styled.label`
    font-size: 32px;
    margin-right: 20px;
`;

const Input = styled.input`
    width: 400px;
    padding: 1rem 1.5rem;
    border: 1.5px solid #ddd;
    outline: 0;

    border-radius: 10px;
`;

const InputDescription = styled.p`
    margin: 0;

    font-size: 19px;
`;

const OKButton = styled.button`
    display: block;
    margin: 0 auto;
    margin-top: 30px;

    padding: 0.6rem 2rem;

    color: #666;
    font-weight: bold;
    font-size: 32px;
    background-color: #eee;

    outline: none;
    border: 2px solid #ddd;
    border-radius: 40px;
`;
