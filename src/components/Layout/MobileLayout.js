import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faCommentDots } from '@fortawesome/free-regular-svg-icons';

import { useSelector } from 'react-redux';

// container
import LoginContainer from 'container/auth/login';
import RegisterContainer from 'container/auth/register';

export default function MobileLayout({ children }) {
    const router = useRouter();
    const { pathname, query } = router;

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
            <Link href="/">
                <Logo>MediaStock</Logo>
            </Link>
        </MobileHeaderView>
    );
}

function MobileFooter() {
    const router = useRouter();
    const user = useSelector((state) => state.user.toJS().logined?.user);
    const [myModal, setMyModal] = useState(false);

    const onClickItem = useCallback(
        (pathname, query = null) => {
            const target = {
                pathname,
                query: { ...router.query, ...query },
            };
            if (!target?.pathname) delete target.pathname;

            router.push(target);
        },
        [router.query],
    );

    const onClickMain = useCallback(() => {
        if (!user) onClickItem(null, { auth: 'login' });
        else setMyModal(!myModal);
    }, [user, myModal]);

    return (
        <>
            <MobileFooterWrapper>
                <MobileFooterItem onClick={() => onClickItem('/')}>
                    <FontAwesomeIcon icon={faHome} size="lg" color="#FFBCBC" />
                    <MobileFooterItemText>홈</MobileFooterItemText>
                </MobileFooterItem>
                <MobileFooterItem onClick={() => onClickItem('/market')}>
                    <FontAwesomeIcon icon={faPlay} size="lg" color="#FFBCBC" />
                    <MobileFooterItemText>미톡마켓</MobileFooterItemText>
                </MobileFooterItem>
                <MobileFooterItem onClick={onClickMain}>
                    <MobileFooterMainIcon src="/tab-main-icon.png" />
                </MobileFooterItem>
                <MobileFooterItem onClick={() => onClickItem('/article')}>
                    <FontAwesomeIcon icon={faThumbsUp} size="lg" color="#FFBCBC" />
                    <MobileFooterItemText>Media's talk</MobileFooterItemText>
                </MobileFooterItem>
                <MobileFooterItem onClick={() => onClickItem('/more')}>
                    <FontAwesomeIcon icon={faCommentDots} size="lg" color="#FFBCBC" />
                    <MobileFooterItemText>더보기</MobileFooterItemText>
                </MobileFooterItem>
            </MobileFooterWrapper>

            {myModal && (
                <Hexagon>
                    <HexagonImage src="/hexagon.png" />

                    <HexagonText>관심채널</HexagonText>
                    <HexagonText>나의 채널</HexagonText>
                    <HexagonText>나의 경매</HexagonText>
                </Hexagon>
            )}
        </>
    );
}

const MobileWrapper = styled.div`
    width: 100%;
    min-height: 100vh;

    @media (min-width: 740px) {
        display: none;
    }
`;

const MobileView = styled.div`
    min-height: calc(100vh - 127px);
    padding: 23px;
    padding-bottom: 80px;
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
    z-index: 2;

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
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MobileFooterMainIcon = styled.img`
    width: 80px;
    margin-top: -35px;

    object-fit: contain;
`;

const MobileFooterItemText = styled.div`
    margin-top: 5px;

    color: #ffbcbc;
    font-size: 12.5px;
    font-weight: bold;
`;

const Hexagon = styled.div`
    width: 100%;
    height: 179px;

    position: fixed;
    bottom: -33px;

    display: flex;
    justify-content: center;

    z-index: 1;
`;

const HexagonImage = styled.img`
    width: 204px;
    height: 179px;
    position: absolute;
    top: 0;
`;

const HexagonText = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: #ffa8a8;
    margin: 0;

    position: absolute;
    z-index: 2;

    &:nth-child(2) {
        margin-top: 40px;
        margin-left: -120px;
    }

    &:nth-child(3) {
        margin-top: 10px;
    }

    &:nth-child(4) {
        margin-top: 40px;
        margin-right: -120px;
    }
`;
