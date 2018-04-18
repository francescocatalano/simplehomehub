import Light from './light'

class RbgLight extends Light {

    constructor(identity,name,realm,defaultState = 'on',attributes,data){
        super(identity,name,realm,defaultState,attributes,data);
        this.type = 'rgblight';
    }


}

export default RbgLight;
