import dynamic from 'next/dynamic';

export const AdminBannerList = dynamic(() => import('./BannerList'));
export const AdminBannerUpload = dynamic(() => import('./BannerUpload'));
