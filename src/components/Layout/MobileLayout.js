import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

// assets

export default function MobileLayout({ children }) {
    const router = useRouter();
    const { pathname, query } = router;
    const mobile = query?.mobile;
    if (mobile !== 'true') return null;
    if (pathname === '/') return null;

    return (
        <MobileWrapper>
            <MobileHeader />
            <MobileView>{children}</MobileView>
            <MobileFooter />
        </MobileWrapper>
    );
}

function MobileHeader() {
    return (
        <MobileHeaderWrapperView>
            <MobileHeaderView>
                <Logo>MediaStock</Logo>
            </MobileHeaderView>
        </MobileHeaderWrapperView>
    );
}

function MobileFooter() {
    const router = useRouter();

    const onClickItem = useCallback((pathname) => {
        router.push({
            pathname,
            query: { ...router.query },
        });
    });

    return (
        <MobileFooterWrapper>
            <MobileFooterItem onClick={() => onClickItem('/')}>경매</MobileFooterItem>
            <MobileFooterItem onClick={() => onClickItem('/')}>미톡마켓</MobileFooterItem>
            <MobileFooterItem onClick={() => onClickItem('/')} />
            <MobileFooterItem onClick={() => onClickItem('/article')}>
                Media's talk
            </MobileFooterItem>
            <MobileFooterItem onClick={() => onClickItem('/')}>더보기</MobileFooterItem>
        </MobileFooterWrapper>
    );
}

const MobileWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
`;

const MobileView = styled.div`
    min-height: calc(100vh - 127px);
    padding: 23px;
`;

const MobileHeaderWrapperView = styled.div`
    height: 127px;
    background-color: #223351;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;

const MobileHeaderView = styled.div`
    height: 53px;
    margin-top: auto;

    display: flex;
    align-items: center;
`;

const Logo = styled.h1`
    margin: 0 auto;

    color: #fff;
    font-size: 18px;
`;

const MobileFooterWrapper = styled.div`
    width: 100%;
    height: 70px;

    position: absolute;
    bottom: 0;

    display: flex;
    align-items: center;

    background-color: white;

    -webkit-box-shadow: 0px -2px 10px 5px #ddd;
    box-shadow: 0px -2px 10px 5px #ddd;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
`;

const MobileFooterItem = styled.div`
    flex: 1;
    height: 50px;

    display: flex;
    justify-content: center;
`;
