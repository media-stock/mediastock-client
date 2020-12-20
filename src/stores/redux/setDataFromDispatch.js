import { fromJS } from 'immutable';

export const setStateFromData = (state, action) => {
    return fromJS(action.payload);
};

export const setStatePageAndOffset = (state, action) => {
    const { page, offset, type } = action.payload;

    let nextState = state;
    if (typeof page === 'number') nextState = nextState.setIn([type, 'page'], page);
    if (typeof offset === 'number') nextState = nextState.setIn([type, 'offset'], offset);

    return nextState;
};

export const setInitialState = ({ dispatch, data }, type, payload) => {
    dispatch({ type, payload });
};
