import Request from './request';

export const onGetArticles = async ({ ...query }) => {
    const url = `/articles`;

    const response = await Request.onRequestGet({ url, query });
    return response;
};

export const onGetArticle = async ({ id }) => {
    const url = `/articles/${id}`;

    const response = await Request.onRequestGet({ url });
    return response;
};

export const onCreateArticle = async ({ accessToken, article }) => {
    const url = `/articles`;
    const params = article;
    const headers = Request.getAuthorizationHeader(accessToken);

    const response = await Request.onRequestPost({ url, headers, params });
    return response;
};

export const onUpdateArticle = async ({ accessToken, id, article }) => {
    const url = `/articles/${id}`;
    const params = article;
    const headers = Request.getAuthorizationHeader(accessToken);

    const response = await Request.onRequestPatch({ url, params, headers });
    return response;
};

export const onCreateArticleComment = async ({ accessToken, id, content }) => {
    const url = `/articles/${id}/comments`;
    const headers = Request.getAuthorizationHeader(accessToken);
    const params = { content };

    const response = await Request.onRequestPost({ url, headers, params });
    return response;
};
