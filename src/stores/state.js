import { Map, List } from 'immutable';

export const initialDataState = {
    list: Map({
        pending: false,
        done: false,
        error: null,
        data: List([]),
        dataCount: 0,
        page: 0,
        offset: 20,
    }),
    object: Map({
        pending: false,
        done: false,
        error: null,
        data: Map({}),
    }),
};
