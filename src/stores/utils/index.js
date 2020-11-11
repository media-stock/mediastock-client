import { Map, List } from 'immutable';

export const TYPE_DONE = (type) => `${type}_DONE`;
export const TYPE_ERROR = (type) => `${type}_ERROR`;
export const TYPE_REFRESH = (type) => `${type}_REFERSH`;

export const initialDataState = {
    list: Map({
        pending: false,
        done: false,
        error: null,
        data: List([]),
        dataCount: 0,
        limit: 20,
        offset: 0,
    }),
    object: Map({
        pending: false,
        done: false,
        error: null,
        data: Map({}),
    }),
};
