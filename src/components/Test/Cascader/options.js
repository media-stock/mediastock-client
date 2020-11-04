export const options = [
    {
        value: 'Article',
        label: 'Article',
        children: [
            {
                value: 'articles',
                label: 'GET /articles',
            },
            {
                value: 'article',
                label: 'GET /articles/:id',
            },
            {
                value: 'createArticle',
                label: 'POST /articles',
            },
            {
                value: 'deleteArticle',
                label: 'DELETE /articles/:id',
            },
            {
                value: 'updateArticle',
                label: 'PATCH /articles/:id',
            },
        ],
    },
];
