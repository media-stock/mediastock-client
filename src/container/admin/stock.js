import React from 'react';

import { AdminIPOList } from 'components';

export default function AdminStockContainer({ subPage }) {
    return <>{(subPage === 'list' || subPage === 'object') && <AdminIPOList />}</>;
}
