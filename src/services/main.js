import Request from './request';

export const onEmail = async ({ email }) => {
    const url = `/pre-subscriptions`;
    const params = { email };

    const response = await Request.onRequestPost({ url, params });
    return response;
};
