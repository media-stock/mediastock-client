import { createAction, handleActions } from 'redux-actions';
import { SOCKET_TYPE } from './type';
import { socketState } from './state';

export default handleActions({}, socketState);
