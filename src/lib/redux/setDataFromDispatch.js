import { createAction } from 'redux-actions';

export const TYPE_PAGE = (type) => `${type}/SET_PAGE`;
export const TYPE_STATE = (type) => `${type}/SET_STATE`;

export const onSetPageDispatch = (type) => createAction(TYPE_PAGE(type));
export const onSetStateDispatch = (type) => createAction(TYPE_STATE(type));

export const setPageState = (state, action) => {
    const { page, offset, type } = action.payload;

    let nextState = state;
    if (typeof page === 'number') nextState = nextState.setIn([type, 'page'], page);
    if (typeof offset === 'number') nextState = nextState.setIn([type, 'offset'], offset);

    return nextState;
};

export const setInitialState = (state, action, initialState) => {
    const newState = action.payload;
    return state.set(newState, initialState.get(newState));
};
