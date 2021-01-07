import React from 'react';
import styled from 'styled-components';
import { UIText, UIAccentText } from 'ui';

import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { getDateAll } from 'lib/utils';

export default function CommentList({ comments = [] }) {
    console.log(`CommentList`, comments);

    const commentList = comments?.map((comment) => (
        <CommentItem key={comment?.id} comment={comment} />
    ));

    return (
        <CommentListView>
            <CommentCount>
                <UIAccentText>{comments?.length}개</UIAccentText>의 댓글
            </CommentCount>
            {commentList}
        </CommentListView>
    );
}

function CommentItem({ comment }) {
    // 현재 comment랑 유저랑 연결이 되어있지 않음.
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

const CommentListView = styled.div`
    padding-top: 14px;
    padding-bottom: 70px;
`;

const CommentCount = styled(UIText)`
    margin-bottom: 20px;
`;

const CommentItemView = styled.div`
    margin-bottom: 1.45rem;

    &:last-child {
        margin-bottom: 0;
    }
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
