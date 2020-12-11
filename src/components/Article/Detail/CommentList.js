import React from 'react';
import styled from 'styled-components';

import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { getDateAll } from 'lib/utils';

export default function CommentList({ articles }) {
    const comments = articles?.comments;
    const commentList = comments?.map((comment) => (
        <CommentItem key={comment?.id} comment={comment} />
    ));

    return <CommentListView>{commentList}</CommentListView>;
}

function CommentItem({ comment }) {
    const user = comment?.user;
    const createdAt = getDateAll(comment?.createdAt);

    const UserProfile = user?.thumbnail ? <img src={user?.thumbnail} /> : <UserOutlined />;

    return (
        <CommentItemView>
            <UserView>
                <Avatar size={35} icon={UserProfile} />
                <UserName>{user?.name}</UserName>
            </UserView>

            <Content>{comment?.content}</Content>
            <Created>{createdAt}</Created>
        </CommentItemView>
    );
}

const CommentListView = styled.div``;

const CommentItemView = styled.div`
    margin-bottom: 1.45rem;
`;

const UserView = styled.div`
    display: flex;
    align-items: center;
`;

const UserName = styled.h4`
    margin-left: 9px;

    font-size: ${(props) => props.theme.fontSizeH4};
    font-weight: bold;
`;

const Content = styled.p`
    font-size: ${(props) => props.theme.fontSizeNormal};
    color: #333;
`;

const Created = styled.p`
    font-size: ${(props) => props.theme.fontSizeInfo};
    color: ${(props) => props.theme.infoColor};
`;
