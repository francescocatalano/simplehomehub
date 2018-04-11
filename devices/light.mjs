import switchableDevice from './switchableDevice'

class Light extends switchableDevice {

  constructor(identity,name,realm,defaultState = 'on',attributes,data){
    super(identity,name,realm,defaultState,attributes,data);
    this.type = 'light';
  }

}

export default Light;
