import React from 'react';

import {
    AdminChannelList,
    AdminChannelDetail,
    AdminChannelVideoList,
    AdminChannelVideoDetail,
} from 'components';

export default function AdminChannelContainer({ subPage }) {
    return (
        <>
            <AdminChannelList />
            <AdminChannelDetail />
            <AdminChannelVideoDetail />
        </>
    );
}
