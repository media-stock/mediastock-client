import { initialFetchType } from 'lib';

export const AUTH_TYPES = {
    ...initialFetchType('ON_LOGIN', 'auth/ON_LOGIN'),
    ...initialFetchType('ON_REGISTER', 'auth/ON_REGISTER'),
};
