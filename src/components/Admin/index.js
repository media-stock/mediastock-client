import dynamic from 'next/dynamic';

export const AdminLayout = dynamic(()=>import('./Layout').then((mod) => mod.AdminLayout));
export const AdminDrawer = dynamic(()=>import('./Layout').then((mod) => mod.AdminDrawer));