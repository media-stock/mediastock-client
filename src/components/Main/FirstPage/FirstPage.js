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
`;

const LeftSection = styled.section`
    width: 75%;
`;

const RightSection = styled.section`
    width: 25%;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;

const Cover = styled.img`
    width: 100%;
    object-fit: contain;
`;

const TextView = styled.div`
    margin-left: auto;
    margin-right: 18px;
`;

const Title = styled.h1`
    margin-top: 45px;
    font-size: 46px;
    font-weight: bold;
    line-height: 1.2;

    text-align: right;
`;

const Description = styled.p`
    margin-top: 55px;
    font-size: 30px;
    line-height: 1.15;

    text-align: right;
`;

const Logo = styled.img`
    width: 90%;
    margin-left: auto;
    margin-right: 10px;
    margin-top: auto;
    margin-bottom: -40px;

    object-fit: contain;
`;
