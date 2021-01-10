import React from 'react';
import styled from 'styled-components';

// ui
import { UIInput, UILoading } from 'ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// components
import { Header, ArticleList } from 'components';

// redux
import { useSelector } from 'react-redux';

export default function MoreNoticeContainer() {
    const articles = useSelector((state) => state.article?.toJS().articles);
    const { data, pending, error } = articles;

    return (
        <>
            <Header logo="자주 묻는 질문" />
            <UILoading view={pending} />

            <SearchInputView>
                <SearchIcon>
                    <FontAwesomeIcon icon={faSearch} />
                </SearchIcon>
                <SearchInput placeholder="키워드 검색" />
            </SearchInputView>

            <ArticleList articles={data} />
        </>
    );
}

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
