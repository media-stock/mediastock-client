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
    {
        value: 'Channel',
        label: 'Channel',
        children: [
            {
                value: 'channels',
                label: 'GET /channels',
            },
            {
                value: 'channel',
                label: 'GET /channels/:id',
            },
            {
                value: 'createChannels',
                label: 'POST /channels',
            },
            {
                value: 'deleteChannel',
                label: 'DELETE /channels/:id',
            },
            {
                value: 'updateChannel',
                label: 'PATCH /channels/:id',
            },
        ],
    },
];
