import React from 'react';
import { AdminArticleList, AdminArticleDetail, AdminArticleCreate } from 'components';

export default function AdminArticleContainer() {
    return (
        <>
            <AdminArticleList />
            <AdminArticleDetail />
            <AdminArticleCreate width={900} />
        </>
    );
}
