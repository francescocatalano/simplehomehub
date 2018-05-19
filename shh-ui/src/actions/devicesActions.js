import * as types from "../constants/action-types";
import componentApi from "../apis/devicesApi";

export function loadDevices(){
    return function(dispatch) {
        return componentApi.getAllDevices()
            .then(devices => {
                dispatch(loadDevicesSuccess(devices));
            }).catch(error => {
                throw(error);
            });
    }
}

export function loadDevice(id){
    return function(dispatch) {
        return componentApi.getDevice(id)
            .then(device => {
                dispatch(loadDeviceSuccess(device));
            }).catch(error => {
                throw(error);
            });
    }
}

export function loadDeviceSuccess(device){
    return {type: types.LOAD_DEVICE_SUCCESS ,device};
}

export function loadDevicesSuccess(devices){
    return {type: types.LOAD_DEVICES_SUCCESS ,devices};
}
