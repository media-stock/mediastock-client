import Request from 'services/request';

export const onGetHomeChannelRealTime = async ({ page = 0, offset = 6 }) => {
    const url = '/channels';
    const query = { offset: page * offset, limit: offset, state: 'all' };

    const response = await Request.onRequestGet({ url, query });
    return response;
};

export const onGetHomeChannelNew = async ({ page = 0, offset = 6 }) => {
    const url = '/channels';
    const query = { state: 'ipo', sort: 'desc', page, offset, order: 'createdAt' };

    const response = await Request.onRequestGet({ url, query });
    return response;
};

export const onGetHome = async ({ page = 0, offset = 6 }) => {
    const [response1, response2] = await Promise.all([
        onGetHomeChannelRealTime({ page, offset }),
        onGetHomeChannelNew({ page, offset }),
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
