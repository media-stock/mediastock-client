import React from 'react';
import styled from 'styled-components';
import { UIHeaderText, UIText } from 'ui';

export default function MoreNoticeList() {
    return (
        <NoticeListView>
            <MoreNoticeItem />
            <MoreNoticeItem />
            <MoreNoticeItem />
        </NoticeListView>
    );
}

function MoreNoticeItem() {
    return (
        <NoticeItemView>
            <Title size="h5">공지사항 제목</Title>
            <Date info>2021-1-1</Date>
        </NoticeItemView>
    );
}

const NoticeListView = styled.div``;

const NoticeItemView = styled.div`
    padding: 5px 10px;
    border-bottom: 1px solid #ddd;
`;

const Title = styled(UIHeaderText)``;

const Date = styled(UIText)``;
