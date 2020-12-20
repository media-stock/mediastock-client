import React from 'react';
import styled from 'styled-components';
import { UIHeaderText } from 'ui';

import { Header, MyChannelTabView, MyChannelList } from 'components';

export default function MyChannelContainer() {
    return (
        <>
            <Header logo="관심 채널" />
            <MyChannelTabView />
            <MyChannelList />
        </>
    );
}
