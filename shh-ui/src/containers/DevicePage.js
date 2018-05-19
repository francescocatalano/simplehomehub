import React from 'react';
import {connect} from 'react-redux';
import { loadDevice } from '../actions/devicesActions';
import Device from '../components/Device';


class DevicePage extends React.Component {
    render(){
      return(
          <div className="row">
              <div className="col-md-12">
                  <h1>{this.props.match.params.id}</h1>
                  <Device {...this.props}/>
              </div>
          </div>
      )
    }
    componentDidMount(){
      const identity = this.props.match.params.id;
      this.props.init(identity);
    }
}


const mapStateToProps = (state, ownProps) => {
  return {
      device : state.devices
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    init : (identity) => dispatch(loadDevice(identity))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DevicePage);
