import React from 'react';
import styled from 'styled-components';

export default function FirstPage() {
    return (
        <FirstPageView>
            <LeftSection>
                <Cover src="main-cover1.jpg" />
            </LeftSection>

            <RightSection>
                <TextView>
                    <Title>
                        미디어와 주식이
                        <br />
                        하나되다.
                    </Title>
                    <Description>
                        Media and Stocks
                        <br />
                        become together
                    </Description>
                </TextView>
                <Logo src="logo.png" />
            </RightSection>
        </FirstPageView>
    );
}

const FirstPageView = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    @media only screen and (max-width: 600px) {
        flex-direction: column;

        position: relative;
    }
`;

const LeftSection = styled.section`
    width: 75%;

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;

const RightSection = styled.section`
    width: 25%;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    @media only screen and (max-width: 600px) {
        width: 100%;
        height: 70vh;
        position: absolute;
        top: 0;
    }
`;

const Cover = styled.img`
    width: 100%;
    object-fit: contain;

    @media only screen and (max-width: 600px) {
        height: 70vh;
        object-fit: cover;
        opacity: 0.4;
    }
`;

const TextView = styled.div`
    margin-left: auto;
    margin-right: 18px;
`;

const Title = styled.h1`
    margin-top: 45px;

    font-family: 'NanumSquare', sans-serif !important;
    font-size: 46px;
    font-weight: bold;
    line-height: 1.2;
    text-align: right;

    @media only screen and (max-width: 600px) {
        font-size: 28px;
    }
`;

const Description = styled.p`
    margin-top: 55px;

    font-family: 'NanumSquare', sans-serif !important;
    font-size: 30px;
    line-height: 1.15;
    text-align: right;

    @media only screen and (max-width: 600px) {
        margin-top: 25px;
        font-size: 20px;
    }
`;

const Logo = styled.img`
    width: 90%;
    margin-left: auto;
    margin-right: 10px;
    margin-top: auto;
    margin-bottom: -40px;

    object-fit: contain;

    @media only screen and (max-width: 600px) {
        width: 50%;
        margin-left: 20px;
        margin-top: auto;
        margin-right: auto;
        margin-bottom: 25px;
    }
`;
