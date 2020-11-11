import React from 'react';

import { AdminChannelList } from 'components';

export default function AdminChannelContainer({ subPage }) {
    return <>{(subPage === 'list' || subPage === 'detail') && <AdminChannelList />}</>;
}
