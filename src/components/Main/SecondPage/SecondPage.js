import React from 'react';
import styled from 'styled-components';

export default function SecondPage() {
    return (
        <SecondPageView>
            <LeftSection>
                <Description>
                    남녀노소 <Accent>누구나</Accent> 할 수 있는
                    <br />
                    <Accent>쉬운</Accent> 투자 상품
                </Description>
                <Description>
                    즐겨보는 1인 미디어의 저작권에 투자해
                    <br />
                    <Accent>저작권료나 배당수익</Accent>을 얻어보세요
                </Description>
                <Description>
                    유저간 거래로 <Accent>시세 차익</Accent>을 통해
                    <br />더 많은 수익을 얻어보세요.
                </Description>
            </LeftSection>
            <RightSection>
                <Cover src="/main-cover2.jpg" />
            </RightSection>
        </SecondPageView>
    );
}

const SecondPageView = styled.div`
    width: 100%;
    height: 90vh;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`;

const LeftSection = styled.section`
    width: 65%;
    padding-top: 10%;
    padding-bottom: 10%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const RightSection = styled.section`
    width: 35%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Description = styled.p`
    font-size: 38px;
    text-align: center;
`;

const Accent = styled.span`
    font-weight: bold;
    color: red;
`;

const Cover = styled.img`
    width: 80%;
    margin-right: auto;
    object-fit: contain;
`;
