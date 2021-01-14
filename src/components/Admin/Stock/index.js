import dynamic from 'next/dynamic';

export const AdminIPOList = dynamic(() => import('./IPOList'));
export const AdminIPOReqeustList = dynamic(() => import('./IPORequestList'));
export const AdminIPODoneList = dynamic(() => import('./IPODoneList'));
export const AdminIPODeleteList = dynamic(() => import('./IPODeleteList'));
export const AdminIPODetail = dynamic(() => import('./IPODetail'));
