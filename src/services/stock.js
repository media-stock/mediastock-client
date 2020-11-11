import Request from './request';

export const onGetIPOs = async ({ limit, offset }) => {
    const url = `/ipos`;
    const query = { limit, offset };

    const response = await Request.onRequestGet({ url, query });
    return response;
};

export const onGetIPO = async ({ id }) => {
    const url = `/ipos/${id}`;

    const response = await Request.onRequestGet({ url });
    return response;
};
