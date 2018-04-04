class Home {
  constructor(opts){
      this.devices = new Map;
      this.container = opts.container;
  }

  addDevice(id,device){
    this.devices.set(id,device);
  }

  getDevice(device_identity){
    if(this.devices.has(id)){
      return this.devices.get(id);
    }
    return false;
  }

  changeDeviceStateTo(data, envelope) {
    if(data.device_identity){
      let device = this.getDevice(data.device_identity);
      device.setState(data.state);
    }
  }
}

export default Home;
