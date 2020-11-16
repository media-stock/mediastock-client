import dynamic from 'next/dynamic';

export const AdminArticleList = dynamic(() => import('./ArticleList'));
export const AdminArticleDetail = dynamic(() => import('./ArticleDetail'));
