import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import AdminDrawer from './Drawer';

export default function AdminLayout({ children }){
    
    return(
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
            </Head>
            <AdminLayoutWrapper>
                <AdminDrawer>{children}</AdminDrawer>
            </AdminLayoutWrapper>
        </>
    )
}

const AdminLayoutWrapper = styled.div`
    position : absolute;
    top : 0;
    left : 0;
`;