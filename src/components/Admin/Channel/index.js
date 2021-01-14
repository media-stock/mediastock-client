import dynamic from 'next/dynamic';

export const AdminChannelList = dynamic(() => import('./ChannelList'));
export const AdminRequestChannelList = dynamic(() => import('./ChannelRequestList'));
export const AdminChannelDetail = dynamic(() => import('./ChannelDetail'));
export const AdminChannelVideoDetail = dynamic(() => import('./ChannelVideoDetail'));
