import dynamic from 'next/dynamic';

export const AdminChannelList = dynamic(() => import('./ChannelList'));
export const AdminChannelDetail = dynamic(() => import('./ChannelDetail'));
export const AdminChannelVideoDetail = dynamic(() => import('./ChannelVideoDetail'));
