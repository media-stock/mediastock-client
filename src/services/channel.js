import Request from './request';

export const onGetChannels = async ({ page, offset }) => {
    const url = `/channels`;
    const query = { offset: page * offset, limit: offset };

    const response = await Request.onRequestGet({ url, query });
    return response;
};

export const onGetChannel = async ({ id }) => {
    const url = `/channels/${id}`;

    const response = await Request.onRequestGet({ url });
    return response;
};

export const onGetChannelVideos = async ({ id, sort, page, offset }) => {
    const url = `/channels/${id}/videos`;
    const query = { sort, offset: page * offset, limit: offset };

    const response = await Request.onRequestGet({ url, query });
    return response;
};

export const onGetChannelStatistics = async ({ id, page, offset }) => {
    const url = `/channels/${id}/statistics`;
    const query = { offset: page * offset, limit: offset };

    const response = await Request.onRequestGet({ url, query });
    return response;
};

export const onGetMyChannels = async ({ accessToken }) => {
    const url = `/me/channels`;
    const headers = Request.getAuthorizationHeader(accessToken);

    const response = await Request.onRequestGet({ url, headers });
    return response;
};
