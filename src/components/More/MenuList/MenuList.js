import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';
import { UIText } from 'ui';

export default function MenuList() {
    return (
        <MenuListView>
            <MenuItemView>
                <UIText>미디어스톡이란</UIText>
            </MenuItemView>

            <Link href="/more/info">
                <MenuItemView>
                    <UIText>이용방법</UIText>
                </MenuItemView>
            </Link>

            <Link href="/more/notice">
                <MenuItemView>
                    <UIText>공지사항</UIText>
                </MenuItemView>
            </Link>

            <Link href="/more/question">
                <MenuItemView>
                    <UIText>자주 묻는 질문</UIText>
                </MenuItemView>
            </Link>

            <MenuItemView>
                <UIText>1:1 문의</UIText>
            </MenuItemView>

            <Link href="/more/report">
                <MenuItemView>
                    <UIText>미디어스톡 분석 리포트</UIText>
                </MenuItemView>
            </Link>

            <Link href="/logout">
                <MenuItemView>
                    <UIText>로그아웃</UIText>
                </MenuItemView>
            </Link>
        </MenuListView>
    );
}

const MenuListView = styled.div``;

const MenuItemView = styled.div`
    height: 50px;

    display: flex;
    align-items: center;
`;
