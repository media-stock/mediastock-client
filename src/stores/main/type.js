import { TYPE_DONE, TYPE_ERROR } from '../type';

export const MAIN_TYPES = {
    ON_EMAIL: 'main/ON_EMAIL',
    ON_EMAIL_DONE: TYPE_DONE('main/ON_EMAIL'),
    ON_EMAIL_ERROR: TYPE_ERROR('main/ON_EMAIL'),
};
