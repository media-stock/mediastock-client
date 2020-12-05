import dynamic from 'next/dynamic';

export const HomeSearchInput = dynamic(() => import('./Search'), { ssr: false });
export const HomeChannelRealTime = dynamic(() => import('./ChannelRealTime'));
