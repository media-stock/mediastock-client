import dynamic from 'next/dynamic';

export const HomeSearchInput = dynamic(() => import('./Search'), { ssr: false });
export const HomeChannelRealTime = dynamic(() => import('./ChannelRealTime'));
export const HomeChannelNew = dynamic(() => import('./ChannelNew'));
export const HomeMediaTalkRanking = dynamic(() => import('./MediaTalkRanking'));
