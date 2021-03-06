import { Request } from 'lib';

export const onGetMarkets = async (query) => {
    const url = '/channels';

    const response = await Request.onRequestGet({ url, query });
    return response;
};

export const onGetMarket = async ({ id }) => {
    const url = `/channels/${id}`;

    const response = await Request.onRequestGet({ url });
    return response;
};

export const onGetMarketStockOrders = async ({ id }) => {
    const url = `/channels/${id}/stock-orders`;

    const response = await Request.onRequestGet({ url });

    console.log(`onGetMarketStockOrders`, url, response);
    return response;
};
