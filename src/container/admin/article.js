import React, { useCallback, useState } from 'react';

import { AdminArticleList, AdminArticleDetail } from 'components';

export default function AdminArticleContainer({ subPage }) {
    return (
        <>
            <AdminArticleList subPage={subPage} />
            <AdminArticleDetail subPage={subPage} />
        </>
    );
}
