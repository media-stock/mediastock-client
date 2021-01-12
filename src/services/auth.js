import { Request } from 'lib';

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
    const url = `/oauth/${socialType}/authorize`;

    const response = await Request.onRequestGet({ url });
    return response;
};
