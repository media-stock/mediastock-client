import dynamic from 'next/dynamic';

export const ArticleList = dynamic(() => import('./List'));
export const ArticleDetailHeader = dynamic(() => import('./Detail').then((mod) => mod.Header));
export const ArticleDetailContent = dynamic(() => import('./Detail').then((mod) => mod.Content));
export const ArticleDetailCommentList = dynamic(() =>
    import('./Detail').then((mod) => mod.CommentList),
);
export const ArticleDetailCommentInput = dynamic(() =>
    import('./Detail').then((mod) => mod.CommentInput),
);
