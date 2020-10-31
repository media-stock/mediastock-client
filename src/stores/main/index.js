import { createAction, handleActions } from 'redux-actions';

import { mainState } from './state';
import { MAIN_TYPES } from './type';
import { createPromiseThunk, createPromiseState, setImmutableState } from '../redux';
import * as mainAPI from 'services/main';

export const onEmail = createPromiseThunk(MAIN_TYPES.ON_EMAIL, mainAPI.onEmail);

export default handleActions(
    {
        [MAIN_TYPES.ON_EMAIL]: (state, action) => {
            const pendingState = createPromiseState.pending();
            return setImmutableState(state, 'onEmail', pendingState);
        },
        [MAIN_TYPES.ON_EMAIL_DONE]: (state, action) => {
            const doneState = createPromiseState.done();
            return setImmutableState(state, 'onEmail', doneState);
        },
        [MAIN_TYPES.ON_EMAIL_ERROR]: (state, action) => {
            const errorState = createPromiseState.error(action.payload);
            return setImmutableState(state, 'onEmail', errorState);
        },
    },
    mainState,
);
