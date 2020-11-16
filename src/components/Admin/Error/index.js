import dynamic from 'next/dynamic';

export const AdminError = dynamic(() => import('./Error'));
