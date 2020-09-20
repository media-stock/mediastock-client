import Request from './request';

export const onLogin = async({ id, password }) => {
    const url = `/auth/login`;
    const params = { id, password };
    
    const response = await Request.onRequestPost({ url, params });
    return response;
}

export const onRegister = async({ email, password, nickname }) => {
    const url = `/auth/register`;
    const params = { email, password, nickname };
    
    const response = await Request.onRequestPost({ url, params });
    return response;
}

export const onSocial = async(socialType) => {
    // https://gkoqmv0p8c.execute-api.ap-northeast-2.amazonaws.com/dev/oauth/google/authorize
    const url = `/oauth/${socialType}/authorize`;
    
    const response = await Request.onRequestGet({ url });
    return response;
}