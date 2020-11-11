import dynamic from 'next/dynamic';

export const AdminArticleList = dynamic(() => import('./ArticleList'));
