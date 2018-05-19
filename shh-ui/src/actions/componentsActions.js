import * as types from "../constants/action-types";
import componentApi from "../apis/componentApi";

export function loadComponents(){
    return function(dispatch) {
        return componentApi.getAllComponents()
            .then(components => {
                dispatch(loadComponentsSuccess(components));
            }).catch(error => {
                throw(error);
            });
    }
}

export function installComponent(id){
    return function(dispatch) {
        return componentApi.installComponent(id)
            .then(component => {
                dispatch(installComponentSuccess(component));
            }).catch(error => {
                throw(error);
            });
    }
}

export function installComponentSuccess(component){
    return {type: types.INSTALL_COMPONENTS_SUCCESS ,component};
}

export function loadComponentsSuccess(components){
    return {type: types.LOAD_COMPONENTS_SUCCESS ,components};
}
