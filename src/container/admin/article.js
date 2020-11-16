import React, { useCallback, useState } from 'react';

import { AdminArticleList, AdminArticleDetail } from 'components';

export default function AdminArticleContainer({ subPage }) {
    return (
        <>
            {(subPage === 'list' || subPage === 'detail') && <AdminArticleList />}
            {subPage === 'detail' && <AdminArticleDetail subPage={subPage} />}
        </>
    );
}
