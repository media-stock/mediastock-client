import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStream } from '@fortawesome/free-solid-svg-icons';

import { MarketMainList, MarketDetailList } from 'components';
import { UIHeaderText, UIInput, UIText } from 'ui';

export default function MeTalkMarktetContainer() {
    const [active, setActive] = useState('main');

    const onClickAlign = () => {
        if (active === 'main') setActive('detail');
        if (active === 'detail') setActive('main');
    };

    return (
        <>
            <HeaderText size="h3">미톡마켓</HeaderText>
            <SearchInputView>
                <SearchIcon>
                    <FontAwesomeIcon icon={faSearch} />
                </SearchIcon>
                <SearchInput placeholder="원하는 크리에이터를 검색해보세요." />
            </SearchInputView>
            <AlignWrapper onClick={onClickAlign}>
                <FontAwesomeIcon icon={faStream} />
                <Text>정렬기준</Text>
            </AlignWrapper>
            <ListWrapper>
                <MarketMainList active={active} />
                <MarketDetailList active={active} />
            </ListWrapper>
        </>
    );
}

const HeaderText = styled(UIHeaderText)`
    margin-bottom: 10px;

    text-align: center;
`;

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

const AlignWrapper = styled.div`
    width: 70px;
    height: 20px;
    margin-top: -10px;

    color: #ababab;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    position: absolute;
    right: 30px;
`;

const Text = styled(UIText)`
    padding-left: 3px;

    font-size: 14px;
    color: #ababab;
`;

const ListWrapper = styled.div`
    margin-top: 45px;
`;
