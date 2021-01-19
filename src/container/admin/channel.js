import React from 'react';

import {
    AdminChannelList,
    AdminRequestChannelList,
    AdminChannelDetail,
    AdminChannelVideoList,
    AdminChannelVideoDetail,
} from 'components';

export default function AdminChannelContainer({ subPage }) {
    console.log(`AdminChannelContainer`, subPage);
    return (
        <>
            <AdminChannelList />
            <AdminRequestChannelList />
            <AdminChannelDetail />
            <AdminChannelVideoDetail />
        </>
    );
}
