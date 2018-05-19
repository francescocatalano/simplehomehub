import React from 'react';
import {connect} from 'react-redux';
import { loadDevices } from '../actions/devicesActions';
import DeviceList from '../components/DeviceList';

class DevicesPage extends React.Component {
    render(){
      return(
          <div className="row">
              <div className="col-md-12">
                  <h1>DEVICES</h1>
                  <DeviceList {...this.props}/>
              </div>
          </div>
      )
    }
    componentDidMount(){
      this.props.init();
    }
}


const mapStateToProps = (state, ownProps) => {
  return {
      devices : state.devices
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    init : () => dispatch(loadDevices())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DevicesPage);
