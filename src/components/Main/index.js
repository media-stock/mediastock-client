import dynamic from 'next/dynamic';

export const MainCover = dynamic(() => import('./Cover'));
export const MainEmail = dynamic(() => import('./Email'));
export const MainFooter = dynamic(() => import('./Footer'));
