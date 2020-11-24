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
            <AdminChannelList subPage={subPage} />
            <AdminChannelDetail subPage={subPage} />
            <AdminChannelVideoList subPage={subPage} />
            <AdminChannelVideoDetail subPage={subPage} />
        </>
    );
}
