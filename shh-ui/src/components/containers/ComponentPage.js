import React from 'react';
import {connect} from 'react-redux';
import { loadComponent } from '../../actions/componentActions';
import Component from '../Component';

class ComponentPage extends React.Component {
    render(){
      return(
          <div className="row">
              <div className="col-md-12">
                  <h1>{this.props.component.id}</h1>
                  <Component {...this.props}/>
              </div>
          </div>
      )
    }
    componentDidMount(){
      const id = this.props.match.params.id;
      this.props.init(id);
    }
}


const mapStateToProps = (state, ownProps) => {
  return {
      component : state.components
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    init : (id) => dispatch(loadComponent(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentPage);
