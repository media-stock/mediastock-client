import React from 'react';
import styled from 'styled-components';

export default function ThirdPage() {
    return (
        <ThirdPageView>
            <LeftSection>
                <Slogan src="/static/main/slogan.jpg" />

                <Description>
                    투자자(시청자)에겐 영상을 <Accent>보는 즐거움</Accent>과<br />
                    영상 수익을 <Accent>갖는 즐거움</Accent>을.
                </Description>
                <Description>
                    크리에이터에겐 성장을 <Accent>보는 즐거움</Accent>과<br />
                    가치가 상승한 자산을 <Accent>갖는 즐거움</Accent>을.
                </Description>
            </LeftSection>
            <RightSection>
                <Cover src="/static/main/main-cover3.jpg" />
            </RightSection>
        </ThirdPageView>
    );
}

const ThirdPageView = styled.div`
    width: 100%;
    height: 90vh;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`;

const LeftSection = styled.section`
    width: 45%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const RightSection = styled.section`
    width: 55%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const Slogan = styled.img`
    width: 80%;
    margin: 0 auto;
    margin-top: -15vh;

    object-fit: contain;
`;

const Description = styled.p`
    font-size: 34px;
    text-align: center;
`;

const Accent = styled.span`
    font-weight: bold;
    color: red;
`;

const Cover = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;
