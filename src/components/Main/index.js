import dynamic from 'next/dynamic';

export const MainFirstPage = dynamic(() => import('./FirstPage'));
export const MainSecondPage = dynamic(() => import('./SecondPage'));
export const MainThirdPage = dynamic(() => import('./ThirdPage'));
export const MainFourthPage = dynamic(() => import('./FourthPage'));
export const MainFooter = dynamic(() => import('./Footer'));
