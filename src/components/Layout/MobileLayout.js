import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

// container
import LoginContainer from 'container/auth/login';
import RegisterContainer from 'container/auth/register';

export default function MobileLayout({ children }) {
    const router = useRouter();
    const { pathname, query } = router;
    const mobile = query?.mobile;

    if (mobile === 'false') return null;
    if (pathname === '/landing') return null;

    return (
        <MobileWrapper>
            <MobileHeader />
            <MobileView>{children}</MobileView>
            <MobileFooter />

            <LoginContainer />
            <RegisterContainer />
        </MobileWrapper>
    );
}

function MobileHeader() {
    return (
        <MobileHeaderView>
            <Logo>MediaStock</Logo>
        </MobileHeaderView>
    );
}

function MobileFooter() {
    const router = useRouter();

    const onClickItem = useCallback((pathname, query = null) => {
        router.push({
            pathname,
            query: { ...router.query, ...query },
        });
    });

    return (
        <MobileFooterWrapper>
            <MobileFooterItem onClick={() => onClickItem('/home')}>경매</MobileFooterItem>
            <MobileFooterItem onClick={() => onClickItem('/home')}>미톡마켓</MobileFooterItem>
            <MobileFooterItem onClick={() => onClickItem('/home', { auth: 'login' })}>
                Home
            </MobileFooterItem>
            <MobileFooterItem onClick={() => onClickItem('/article')}>
                Media's talk
            </MobileFooterItem>
            <MobileFooterItem onClick={() => onClickItem('/home')}>더보기</MobileFooterItem>
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
    margin-bottom: 70px;
`;

const MobileHeaderView = styled.div`
    height: 63px;
    background-color: #223351;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    justify-content: center;
    align-items: center;
`;

const Logo = styled.h1`
    margin-bottom: 0;

    color: #fff;
    font-size: 18px;
`;

const MobileFooterWrapper = styled.div`
    width: 100%;
    height: 70px;

    position: fixed;
    left: 0;
    right: 0;
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
