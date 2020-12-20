import React from 'react';

import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStream } from '@fortawesome/free-solid-svg-icons';

import { UIInput } from 'ui';

export default function InfoList() {
    return (
        <>
            <SearchInputView>
                <SearchIcon>
                    <FontAwesomeIcon icon={faSearch} />
                </SearchIcon>
                <SearchInput placeholder="키워드 검색" />
            </SearchInputView>
            <InformWrapper>
                <InformNum>1.</InformNum>
                <InformText>
                    <span style={{ color: 'red' }}>프로필사진</span>을 누르면 <br />
                    채널에 대한 정보를 확인할 수 있어요.
                </InformText>
            </InformWrapper>
            <InformWindow>
                <InformProfile src="/sample-profile.png" />
                <InformName>감스트</InformName>
            </InformWindow>
            <InformWrapper between>
                <InformNum>2.</InformNum>
                <InformText>
                    <span style={{ color: 'red' }}>채널명</span>을 누르면 <br />
                    채널에 대한 정보를 확인할 수 있어요.
                </InformText>
            </InformWrapper>
            <InformWindow>
                <InformProfile src="/sample-profile.png" />
                <InformName>감스트</InformName>
            </InformWindow>
        </>
    );
}

const SearchInputView = styled.div`
    margin-bottom: 2rem;

    position: relative;

    display: flex;
    align-items: center;
`;

const SearchIcon = styled.div`
    position: absolute;
    left: 10px;
`;

const SearchInput = styled(UIInput)`
    width: 100%;
    padding: 0.2rem 1rem;
    padding-left: 35px;

    font-size: 0.85rem;
    background-color: ${(props) => props.theme.infoColor};
    border-radius: 10px;
`;

const InformWrapper = styled.div`
    width: 100%;

    display: flex;

    border-bottom: 1px solid #f1f1f1;

    ${(props) =>
        props.between &&
        css`
            margin-top: 25px;
        `}
`;

const InformNum = styled.p`
    width: 10%;

    font-size: 20px;
    font-weight: 600;

    color: #df0f0f;
`;

const InformText = styled.div`
    width: 90%;
    margin-left: -15px;

    font-size: 20px;
    font-weight: 600;

    color: #000000;
`;

const InformWindow = styled.div`
    width: 100%;
    height: 100px;
    margin-top: 10px;

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;

    background-color: #eeeeee;

    box-shadow: -1px 3px 4px 0 rgba(0, 0, 0, 0.16);

    border-radius: 15px;
`;

const InformProfile = styled.img`
    width: 30%;
`;

const InformName = styled.p`
    margin-left: 50px;
    margin-bottom: 40px;

    font-size: 28px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: 3.09px;
    text-align: left;
    color: #000000;
`;
