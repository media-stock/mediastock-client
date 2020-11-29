import dynamic from 'next/dynamic';

export const ArticleList = dynamic(() => import('./ArticleList'));
