import React from 'react';

import { Helmet, AdminDrawer, AdminLayout } from 'components';
import { adminHelmet as helmet } from 'config';

// container
import AdminIndexContainer from 'container/admin/index';

export default function AdminIndexPage({}){
    return(
        <>
            <Helmet helmet={helmet}/>
            <AdminLayout>
                <AdminIndexContainer/>
            </AdminLayout>
        </>
    );
}