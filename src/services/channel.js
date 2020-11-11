import Request from './request';

export const onGetChannels = async ({ limit = 10, offset = 0 }) => {
    const url = `/channels`;
    const query = { limit, offset };

    const response = await Request.onRequestGet({ url, query });
    return response;
};

export const onGetChannel = async ({ id }) => {
    const url = `/channels/${id}`;

    const response = await Request.onRequestGet({ url });
    return response;
};
