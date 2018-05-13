import * as types from '../constants/action-types';
import initialState from './initialState';

export default function deviceReducer(state = initialState.devices, action){
    switch(action.type){
        case types.LOAD_DEVICES_SUCCESS:
            return action.devices;
        default:
            console.log('return default state');
            console.log(state);
            return state;
    }
}
