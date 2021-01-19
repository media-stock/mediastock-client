import { Request } from 'lib';

export const onGetChannels = async (query) => {
    const url = `/channels`;

    const response = await Request.onRequestGet({ url, query });
    return response;
};

export const onGetChannel = async ({ id }) => {
    const url = `/channels/${id}`;

    const response = await Request.onRequestGet({ url });
    return response;
};

export const onGetChannelVideos = async ({ id, ...query }) => {
    const url = `/channels/${id}/videos`;

    const response = await Request.onRequestGet({ url, query });
    return response;
};

export const onGetChannelStatistics = async ({ id, ...query }) => {
    const url = `/channels/${id}/statistics`;

    const response = await Request.onRequestGet({ url, query });
    return response;
};

export const onGetArticles = async (query) => {
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

export const onDeleteArticle = async ({ accessToken, id }) => {
    const url = `/articles/${id}`;
    const headers = Request.getAuthorizationHeader(accessToken);

    const response = await Request.onRequestDelete({ url, headers });
    return response;
};

export const onUpdateArticle = async ({ accessToken, id, article }) => {
    const url = `/articles/${id}`;
    const params = article;
    const headers = Request.getAuthorizationHeader(accessToken);

    const response = await Request.onRequestPatch({ url, params, headers });
    return response;
};
