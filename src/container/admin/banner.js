import React from 'react';
import { AdminBannerList, AdminBannerUpload } from 'components';

export default function AdminBannerContainer({ subPage }) {
    return (
        <>
            {subPage === 'list' && <AdminBannerList />}
            {subPage === 'upload' && <AdminBannerUpload />}
        </>
    );
}
