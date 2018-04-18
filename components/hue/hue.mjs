import huejay from 'huejay';
import BaseComponent from '../../system/baseComponent';
import ComponentRegistry from '../../system/componentRegistry';
import Bridge from './utils/bridge';
import LightTranslator from './utils/translator';
import _ from 'lodash';
const realm = 'hue';
const deviceType = 'shh1';
import { rgb_to_cie } from './utils/rgbcie.mjs';


class Hue extends BaseComponent {

  constructor({messagebus,logger,componentRegistry,home,store}){
    super(messagebus,home,store);
    this.logger = new logger('Hue');
    this.sync = {type: BaseComponent.syncNone, every: 4};

    this.bridge_ip = this.getStoreValue('hue_bridge_ip');
    this.hue_username = this.getStoreValue('hue_username');
    this.client = undefined;
    this.bridge = new Bridge(this.logger,deviceType);

  }

  static get realm(){
      return realm;
  }

  static registerInfo(){
    return {
      id: 'hue',
      type: ComponentRegistry.typeApplaiance,
      name: 'Philips hue',
      'icon': '/applaiances/hue.jpg',
      'short_name': 'Philips Hue'
    };
  }

  async start(){
      this.logger.debug('Start hue component...');

      let bridge_user = await this.getStoreValue('hue_username');
      let bridge_ip = await this.getStoreValue('hue_bridge_ip');

      if(!bridge_user || !bridge_ip){
        throw new Error('Unable to start');
      }

      let bridge_options ={
        host: bridge_ip,
        username: bridge_user
      };

      this.client = new huejay.Client(bridge_options);

      let authenticatedUser = await this.bridge.getUser(this.client);
      this.logger.debug('Registring lights');
      this.registerListeners();
      this.registerLights(this.client);
      this.registerGroups(this.client);
  }


  async install(){

    this.logger.debug('Install component...');

    let bridge_user = await this.getStoreValue('hue_username');
    let bridge_ip = await this.getStoreValue('hue_bridge_ip');

    if(null == bridge_ip || bridge_ip == undefined){
        let bridge = await this.bridge.discovery();
        this.logger.debug(`Found bridge ${bridge.ip}`);
        this.setStoreValue('hue_bridge_ip',bridge.ip);
        bridge_ip = bridge.ip;
    }


    let bridge_options ={};
    bridge_options.host = bridge_ip;

    let client = new huejay.Client(bridge_options);

    if(bridge_user == undefined || bridge_user == null) {
        await this.waitUserConfirm();
        let user = await this.bridge.createUser(client);
        this.setStoreValue('hue_username',user.username);
    }
    this.start();
  }

  registerServices(){
      return {
          set_scene: (param) => {this.setSceneExample(param) },
          delete_scene: (param) => { this.deleteScene(param) }
      }
  }

  registerListeners()
  {
      this.messagebus.subscribe({
          channel: 'home',
          topic: 'hue.device.changed.state',
          callback: (data,envelope) => { this.changeDeviceState(data,envelope); }
      });

      this.messagebus.subscribe({
          channel: 'home',
          topic: 'hue.device.changed.attributes',
          callback: (data,envelope) => { this.changeDeviceAttribute(data,envelope); }
      });

  }

  changeDeviceState(data,envelope){
      this.logger.debug('Recived message');
      let device = this.home.getDevice(data.identity);
      let id = device.getAttribute('id');
      this.client.lights.getById(id).then((light) => {
          this.logger.debug(`Found Light [${light.id}]: ${light.name}`);
          light.on = (data.to == 'on');
          return this.client.lights.save(light);
      })
      .then((light) => {
          this.logger.debug('Updated light ');
      })
      .catch((error) => {
          this.logger.error(error);
      });
  }

    changeDeviceAttribute(data,envelope){
        this.logger.debug('Recived message');
        let device = this.home.getDevice(data.identity);
        let id = device.getAttribute('id');
        this.client.lights.getById(id).then((light) => {
            this.logger.debug(`Found Light [${light.id}]: ${light.name}`);

            for(let key of Object.keys(data.operations)) {
                console.log('HUE CHANGE ATTRIBUTE TO ' + key + ' TO ' + data.operations[key]);
                this.handleAttributeChange(key, data.operations[key],light);
            }
            return this.client.lights.save(light);
        })
        .then((light) => {
            this.logger.debug('Updated light ');
        })
        .catch((error) => {
            this.logger.error(error);
        });
    }

    handleAttributeChange(attribute,value, light){
        if(attribute == 'color'){
            let [r,g,b] = _.split(value,',');
            let [x,y] = rgb_to_cie(parseInt(r),parseInt(g),parseInt(b));
            let xy = new Array();
            xy.push(parseFloat(x));
            xy.push(parseFloat(y));
            light['xy'] = xy;

        } else {
            console.log('SET ' + attribute + ' TO ' + value);
            light[attribute] = value;
        }
    }


  registerLights(client){
      client.lights.getAll()
        .then(lights => {
            for (let light of lights) {
                let device = LightTranslator.hueLightToDevice(light,realm);
                this.home.addDevice(device.identity,device);
            }
        });
  }

  registerGroups(client){
      client.groups.getAll()
          .then(groups => {
              for (let group of groups){
                  let device = LightTranslator.hueGroupToDevice(group, realm);
                  this.home.addDevice(device.identity,device);
              }
          })
  }

  resync(){
    this.logger.debug('sync');
    this.registerLights(this.client);
  }

  setSceneExample(param)
  {
    this.logger.info('In component service');
    this.logger.debug(param);
    this.logger.debug('With arrow function works!!!');
  }

}
export default Hue;
