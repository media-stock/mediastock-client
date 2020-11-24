import dynamic from 'next/dynamic';

export const AdminChannelList = dynamic(() => import('./ChannelList'));
export const AdminChannelDetail = dynamic(() => import('./ChannelDetail'));
export const AdminChannelVideoList = dynamic(() => import('./ChannelVideoList'));
export const AdminChannelVideoDetail = dynamic(() => import('./ChannelVideoDetail'));
