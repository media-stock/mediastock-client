import dynamic from 'next/dynamic';

export const ArticleList = dynamic(() => import('./List'));
export const ArticleListSearch = dynamic(() => import('./List').then((mod) => mod.Search));
export const ArticleListTabView = dynamic(() => import('./List').then((mod) => mod.TabView));
export const ArticleListRightIcon = dynamic(() => import('./List').then((mod) => mod.RightIcon));

export const ArticleDetailHeader = dynamic(() => import('./Detail').then((mod) => mod.Header));
export const ArticleDetailContent = dynamic(() => import('./Detail').then((mod) => mod.Content));
export const ArticleDetailCommentList = dynamic(() =>
    import('./Detail').then((mod) => mod.CommentList),
);
export const ArticleDetailCommentInput = dynamic(() =>
    import('./Detail').then((mod) => mod.CommentInput),
);

export const ArticleUploadForm = dynamic(() => import('./Upload').then((mod) => mod.Form));
export const ArticleUploadInput = dynamic(() => import('./Upload').then((mod) => mod.Input));
export const ArticleUploadTextarea = dynamic(() => import('./Upload').then((mod) => mod.Textarea));
export const ArticleUploadButton = dynamic(() => import('./Upload').then((mod) => mod.Button));
