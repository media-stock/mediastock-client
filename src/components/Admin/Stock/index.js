import dynamic from 'next/dynamic';

export const AdminIPOList = dynamic(() => import('./IPOList'));
