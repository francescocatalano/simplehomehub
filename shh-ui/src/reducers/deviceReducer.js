import * as types from '../constants/action-types';
import initialState from './initialState';

export default function deviceReducer(state = initialState.devices, action){
    switch(action.type){
        case types.LOAD_DEVICES_SUCCESS:
            return action.devices;
        case types.LOAD_DEVICE_SUCCESS:
            return action.device;
        default:
            console.log('return default state');
            console.log(state);
            return state;
    }
}
