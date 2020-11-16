import React from 'react';

import { AdminChannelList, AdminChannelDetail } from 'components';

export default function AdminChannelContainer({ subPage }) {
    return (
        <>
            {(subPage === 'list' || subPage === 'detail') && <AdminChannelList />}
            {subPage === 'detail' && <AdminChannelDetail subPage={subPage} />}
        </>
    );
}
