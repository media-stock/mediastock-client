import React from 'react';
import styled from 'styled-components';

import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { getDateAll } from 'lib/utils';

export default function ArticleDetailHeader({ article }) {
    const user = article?.user;
    const createdAt = getDateAll(article?.createdAt);

    const UserProfile = user?.thumbnail ? <img src={user?.thumbnail} /> : <UserOutlined />;

    return (
        <HeaderView>
            <BoardTitle>{article?.board?.name}</BoardTitle>

            <ArticleDetailHeaderView>
                <Avatar size={45} icon={UserProfile} />
                <UserView>
                    <UserName>{article?.user?.name || 'asdf'}</UserName>
                    <CreatedAt>{createdAt}</CreatedAt>
                </UserView>
                <ButtonView>
                    <Button>이용규칙</Button>
                    <Button>신고</Button>
                </ButtonView>
            </ArticleDetailHeaderView>
        </HeaderView>
    );
}

const HeaderView = styled.div`
    margin-top: 10px;
`;

const BoardTitle = styled.h1`
    font-size: ${(props) => props.theme.fontSizeH1};
    font-weight: bold;
`;

const ArticleDetailHeaderView = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

const UserView = styled.div`
    margin-left: 15px;
`;

const ButtonView = styled.div`
    display: flex;
    align-items: center;

    margin-left: auto;
    margin-bottom: auto;
`;

const UserName = styled.h3`
    font-size: ${(props) => props.theme.fontSizeH3};
    font-weight: bold;
`;

const CreatedAt = styled.p`
    font-size: ${(props) => props.theme.fontSizeInfo};
    font-weight: normal;
    color: #777;
`;

const Button = styled.p`
    margin-left: 9px;

    font-size: ${(props) => props.theme.fontSizeInfo};
    font-weight: normal;
    color: #777;
`;
