import Request from './request';

export const onGetArticles = async () => {
    const url = `/articles`;

    const response = await Request.onRequestGet({ url });
    return response;
};

export const onGetArticle = async ({ id }) => {
    const url = `/articles/${id}`;

    const response = await Request.onRequestGet({ url });
    return response;
};
