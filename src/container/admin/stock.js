import React from 'react';

import {
    AdminIPOList,
    AdminIPOReqeustList,
    AdminIPODoneList,
    AdminIPODeleteList,
    AdminIPODetail,
} from 'components';

export default function AdminStockContainer({ subPage }) {
    return (
        <>
            {(subPage === 'ipo-list' || subPage === 'ipo-detail') && <AdminIPOList />}
            {(subPage === 'ipo-request-list' || subPage === 'ipo-detail') && (
                <AdminIPOReqeustList />
            )}
            {(subPage === 'ipo-done-list' || subPage === 'ipo-detail') && <AdminIPODoneList />}
            {(subPage === 'ipo-delete-list' || subPage === 'ipo-detail') && <AdminIPODeleteList />}
            {subPage === 'ipo-detail' && <AdminIPODetail subPage={subPage} />}
        </>
    );
}
