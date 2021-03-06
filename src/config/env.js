export const { NODE_ENV } = process.env;
export const isDev = NODE_ENV === 'development' && true;
const isLocal = false;

export const API_URL =
    isDev && isLocal
        ? 'http://localhost:8080'
        : 'https://8r6rvn3xd8.execute-api.ap-northeast-2.amazonaws.com/dev';
export const SOCKET_URL = 'wss://h40ubpc3jc.execute-api.ap-northeast-2.amazonaws.com/dev';
