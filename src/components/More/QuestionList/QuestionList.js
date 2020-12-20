import React from 'react';
import styled from 'styled-components';
import { UIHeaderText, UIText, UIInput } from 'ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function MoreQuestionList() {
    return (
        <QuestionListView>
            <SearchInputView>
                <SearchIcon>
                    <FontAwesomeIcon icon={faSearch} />
                </SearchIcon>
                <SearchInput placeholder="키워드 검색" />
            </SearchInputView>
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

const SearchInputView = styled.div`
    margin-bottom: 1rem;

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

const NoticeItemView = styled.div`
    padding: 5px 10px;
    border-bottom: 1px solid #ddd;
`;

const Title = styled(UIHeaderText)``;

const Date = styled(UIText)``;
