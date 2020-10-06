import dynamic from 'next/dynamic';

export const AdminLayout = dynamic(()=>import('./Layout'));