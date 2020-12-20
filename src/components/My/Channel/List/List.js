import React from 'react';
import styled from 'styled-components';
import { UIHeaderText, UIText } from 'ui';

export default function MyChannelList() {
    const dummyList = [1, 2, 3, 4];
    const channelList = dummyList?.map((dummy) => <ChannelItem key={dummy} />);

    return (
        <ChannelListView>
            {channelList}
            <ChannelItemCreate />
        </ChannelListView>
    );
}

function ChannelItemCreate() {
    return <ChannelItemCreateView>+ 채널 추가하기</ChannelItemCreateView>;
}

function ChannelItem() {
    return (
        <ChannelItemView>
            <LeftSection>
                <img src="/sample-profile.png" />
                <UIHeaderText size="h5">감스트 채널</UIHeaderText>
            </LeftSection>

            <RightSection>
                <ChannelInfoView>
                    <ChannelInfoText info>전일거래량</ChannelInfoText>
                    <ChannelInfoText info>0</ChannelInfoText>
                </ChannelInfoView>
                <ChannelInfoView>
                    <ChannelInfoText info>거래량</ChannelInfoText>
                    <ChannelInfoText info>0</ChannelInfoText>
                </ChannelInfoView>
                <ChannelInfoView>
                    <ChannelInfoText info>현재가</ChannelInfoText>
                    <ChannelInfoText info>0</ChannelInfoText>
                </ChannelInfoView>
                <ChannelInfoView>
                    <ChannelInfoText info>대비(등락)</ChannelInfoText>
                    <ChannelInfoText info>0</ChannelInfoText>
                </ChannelInfoView>
                <ChannelInfoView>
                    <ChannelInfoText info>구독자수</ChannelInfoText>
                    <ChannelInfoText info>0</ChannelInfoText>
                </ChannelInfoView>
                <ChannelInfoView>
                    <ChannelInfoText info>대비(등락)</ChannelInfoText>
                    <ChannelInfoText info>0</ChannelInfoText>
                </ChannelInfoView>
            </RightSection>
        </ChannelItemView>
    );
}

const ChannelListView = styled.div``;

const ChannelItemView = styled.div`
    margin-top: 20px;
    padding: 12px 20px;

    display: flex;
    flex-wrap: wrap;

    background-color: ${(props) => props.theme.infoColor};
    border-radius: 8px;

    &:last-child {
        margin-bottom: 20px;
    }
`;

const ChannelItemCreateView = styled(ChannelItemView)`
    background-color: white;
    border: 2px solid ${(props) => props.theme.infoTextColor};
`;

const LeftSection = styled.div`
    width: 30%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const RightSection = styled.div`
    width: 70%;

    padding-left: 20px;
    display: flex;
    flex-wrap: wrap;
`;

const ChannelInfoView = styled.div`
    width: 50%;

    display: flex;
    align-items: center;
`;

const ChannelInfoText = styled(UIText)`
    color: #666;

    &:last-child {
        margin-left: 6px;
    }
`;
