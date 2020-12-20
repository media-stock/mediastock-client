import React from 'react';
import styled from 'styled-components';
import { UIInput } from 'ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function ArticleListSearch() {
    return (
        <InputView>
            <SearchIconView>
                <FontAwesomeIcon icon={faSearch} color="#707070" />
            </SearchIconView>

            <Input placeholder="단어 및 제목으로 글을 검색해보세요!" />
        </InputView>
    );
}

const InputView = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    margin-bottom: 20px;
`;

const Input = styled(UIInput)`
    padding-left: 35px;
`;

const SearchIconView = styled.div`
    position: absolute;
    left: 10px;
`;
