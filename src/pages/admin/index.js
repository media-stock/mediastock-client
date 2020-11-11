import React from 'react';

import { Helmet, AdminLayout } from 'components';
import { adminHelmet as helmet } from 'config';

// container
import AdminContainer from 'container/admin';

export default function AdminIndexPage() {
    return (
        <>
            <Helmet helmet={helmet} />
            <AdminLayout>
                <AdminContainer />
            </AdminLayout>
        </>
    );
}
