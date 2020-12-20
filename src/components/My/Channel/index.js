import dynamic from 'next/dynamic';

export const MyChannelTabView = dynamic(() => import('./TabView'));
export const MyChannelList = dynamic(() => import('./List'));
