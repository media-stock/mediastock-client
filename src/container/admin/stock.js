import React from 'react';

import { AdminIPOList, AdminIPODetail } from 'components';

export default function AdminStockContainer({ subPage }) {
    return (
        <>
            {(subPage === 'ipo-list' || subPage === 'ipo-detail') && <AdminIPOList />}
            {subPage === 'ipo-detail' && <AdminIPODetail subPage={subPage} />}
        </>
    );
}
