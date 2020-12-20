import React from 'react';
import styled from 'styled-components';
import { UIInput } from 'ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchInputComponent() {
    return (
        <SearchInputView>
            <SearchIcon>
                <FontAwesomeIcon icon={faSearch} color="#989898" />
            </SearchIcon>

            <SearchInput placeholder="원하는 크리에이터를 검색해보세요." />
        </SearchInputView>
    );
}

const SearchInputView = styled.div`
    margin-bottom: 1rem;

    display: flex;
    align-items: center;
`;

const SearchIcon = styled.div`
    position: absolute;
    left: 31.5px;
`;

const SearchInput = styled(UIInput)`
    width: 100%;
    padding: 0.2rem 1rem;
    padding-left: 35px;

    font-size: 0.85rem;
    background-color: ${(props) => props.theme.infoColor};
    border-radius: 10px;
`;
