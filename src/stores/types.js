const TYPE_DONE = (type) => `${type}_DONE`;
const TYPE_ERROR = (type) => `${type}_ERROR`;

export const AUTH_TYPES = {
    LOGIN: 'auth/LOGIN',
    LOGIN_DONE: TYPE_DONE('auth/LOGIN'),
    LOGIN_ERROR: TYPE_ERROR('auth/LOGIN'),
    REGISTER: 'auth/REGISTER',
    REGISTER_DONE: TYPE_DONE('auth/REGISTER'),
    REGISTER_ERROR: TYPE_ERROR('auth/REGISTER'),
    SOCIAL: 'auth/SOCIAL',
    SOCIAL_DONE: TYPE_DONE('auth/SOCIAL'),
    SOCIAL_ERROR: TYPE_ERROR('auth/SOCIAL'),

    SET_LOGIN_INPUT: 'auth/SET_LOGIN_INPUT',
    SET_REGISTER_INPUT: 'auth/SET_REGISTER_INPUT',
};

export const USER_TYPES = {
    SET_USER: 'user/SET_USER',
    SET_TOKEN: 'user/SET_TOKEN',
};
