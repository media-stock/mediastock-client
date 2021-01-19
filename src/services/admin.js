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
