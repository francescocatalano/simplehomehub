import React from 'react';
import { connect } from 'react-redux';
import { loadComponents, installComponent } from '../actions/componentsActions';
import ComponentList from '../components/ComponentList';

class ComponentsPage extends React.Component {
    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <h1>COMPONENTI</h1>
                    <ComponentList onComponentClick={this.props.onComponentClick} components={this.props.components}/>
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
      components: Array.isArray(state.components) ? state.components : []
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onComponentClick : (id) => dispatch(installComponent(id)),
    init : () => dispatch(loadComponents())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsPage);
