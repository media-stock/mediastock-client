import { Request } from 'lib';

export const onGetMarkets = async (query) => {
    const url = '/channels';

    const response = await Request.onRequestGet({ url, query });
    return response;
};
