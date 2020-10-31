import dynamic from 'next/dynamic';

export const MainFirstPage = dynamic(() => import('./FirstPage'));
export const MainSecondPage = dynamic(() => import('./SecondPage'));
