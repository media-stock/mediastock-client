import { Map } from 'immutable';
import { initialDataState } from '../utils';

export const socketState = Map({
    connected: false,
    url: '',
});
