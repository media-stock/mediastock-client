import React from 'react';

import { AdminArticleList } from 'components';

export default function AdminArticleContainer({ subPage }) {
    return <>{(subPage === 'list' || subPage === 'detail') && <AdminArticleList />}</>;
}
