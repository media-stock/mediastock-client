import { Request } from 'lib';

export const onGetHomeChannelRealTime = async () => {
    const url = '/channels';
    const query = { offset: 0, limit: 6, state: 'all' };

    const response = await Request.onRequestGet({ url, query });
    return response;
};

export const onGetHomeChannelNew = async () => {
    const url = '/channels';
    const query = { state: 'ipo', sort: 'desc', offset: 0, limit: 6, order: 'createdAt' };

    const response = await Request.onRequestGet({ url, query });
    return response;
};

export const onGetBanners = async () => {
    const url = '/banners';

    const response = await Request.onRequestGet({ url });
    return response;
};

export const onGetHome = async () => {
    const [response1, response2] = await Promise.all([
        onGetHomeChannelRealTime(),
        onGetHomeChannelNew(),
        // onGetBanners(),
    ]);

    if (response1?.status === 200 && response2?.status === 200) {
        return {
            status: 200,
            data: {
                realTime: response1?.data,
                new: response2?.data,
            },
        };
    }
};

export const onGetMediaTalkRanking = async (query) => {
    const url = '/channels';

    const response = await Request.onRequestGet({ url, query });
    return response;
};
