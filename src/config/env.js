export const { NODE_ENV } = process.env;
export const isDev = NODE_ENV === 'development';

export const API_URL = isDev
    ? 'http://localhost:8080'
    : 'https://oy7hwv9o88.execute-api.ap-northeast-2.amazonaws.com/dev';
export const SOCKET_URL = '';
