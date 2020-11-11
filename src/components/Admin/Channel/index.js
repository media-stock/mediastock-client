import dynamic from 'next/dynamic';

export const AdminChannelList = dynamic(() => import('./ChannelList'));
