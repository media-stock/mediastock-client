import React from 'react';
import styled from 'styled-components';
import { UIHeaderText, UIText } from 'ui';

export default function MoreQuestionList() {
    return (
        <QuestionListView>
            <MoreQuestionItem />
            <MoreQuestionItem />
            <MoreQuestionItem />
        </QuestionListView>
    );
}

function MoreQuestionItem() {
    return (
        <NoticeItemView>
            <Title size="h5">?</Title>
            <Date info>2021-1-1</Date>
        </NoticeItemView>
    );
}

const QuestionListView = styled.div``;

const NoticeItemView = styled.div`
    padding: 5px 10px;
    border-bottom: 1px solid #ddd;
`;

const Title = styled(UIHeaderText)``;

const Date = styled(UIText)``;
