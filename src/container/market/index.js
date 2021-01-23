import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/router';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStream } from '@fortawesome/free-solid-svg-icons';

import { Header, MarketMainList, MarketDetailList } from 'components';
import { UIHeaderText, UIInput, UIText } from 'ui';

export default function MeTalkMarktetContainer({ state, dispatch }) {
    const router = useRouter();
    const [active, setActive] = useState(false);

    const markets = state.market?.toJS()?.markets;
    const { data, done } = markets;

    const onClickAlign = useCallback(() => {
        setActive(!active);
    }, [active]);

    const onMarketItemClick = useCallback(
        (id) => {
            alert('준비중인 서비스입니다.');
            return;

            // router.push(`/market/${id}`);

            // if (!id || !done) {
            //     alert('잘못된 접근입니다.');
            // }
        },
        [done],
    );

    return (
        <>
            <Header logo="미톡마켓" />
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
                {!active && <MarketMainList markets={data} onMarketItemClick={onMarketItemClick} />}
                {active && (
                    <MarketDetailList markets={data} onMarketItemClick={onMarketItemClick} />
                )}
            </ListWrapper>
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
