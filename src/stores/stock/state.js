import { Map } from 'immutable';
import { initialDataState } from '../utils';

export const stockState = Map({
    ipos: initialDataState.list,
    ipo: initialDataState.object,
});
