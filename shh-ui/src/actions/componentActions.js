import * as types from "../constants/action-types";
import componentApi from "../apis/componentApi";

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

export function loadComponentSuccess(component){
    return {type: types.LOAD_COMPONENT_SUCCESS , component};
}
