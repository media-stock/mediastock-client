import Request from './request';

export const onLogin = async ({ email, password }) => {
    const url = `/sign-in`;
    const params = { email, password };

    const response = await Request.onRequestPost({ url, params });
    return response;
};

export const onRegister = async ({ email, password, name }) => {
    const url = `/sign-up`;
    const params = { email, password, name };

    const response = await Request.onRequestPost({ url, params });
    return response;
};

export const onSocial = async (socialType) => {
    // https://gkoqmv0p8c.execute-api.ap-northeast-2.amazonaws.com/dev/oauth/google/authorize
    const url = `/oauth/${socialType}/authorize`;

    const response = await Request.onRequestGet({ url });
    return response;
};
