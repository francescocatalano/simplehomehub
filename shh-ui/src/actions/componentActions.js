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

export function loadComponent(id){
    return function(dispatch) {
        return componentApi.getComponent(id)
            .then(component => {
                dispatch(loadComponentSuccess(component));
            }).catch(error => {
                throw(error);
            });
    }
}

export function loadComponentsSuccess(components){
    return {type: types.LOAD_COMPONENTS_SUCCESS ,components};
}

export function loadComponentSuccess(component){
    return {type: types.LOAD_COMPONENT_SUCCESS , component};
}
