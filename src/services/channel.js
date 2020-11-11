import Request from './request';

export const onGetChannels = async ({ limit = 10, offset = 0 }) => {
    const url = `/channels`;
    const query = { limit, offset };

    const response = await Request.onRequestGet({ url, query });
    console.log(url, query, response);
    return response;
};

export const onGetChannel = async ({ id }) => {
    const url = `/channels/${id}`;

    const response = await Request.onRequestGet({ url });
    console.log(url, response);
    return response;
};
