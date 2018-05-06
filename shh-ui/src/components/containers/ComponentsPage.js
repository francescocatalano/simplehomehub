import React from 'react';
import {connect} from 'react-redux';
import { loadComponents } from '../../actions/componentActions';
import ComponentList from '../ComponentList';

class ComponentsPage extends React.Component {
    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <h1>COMPONENTI</h1>
                    <ComponentList components={this.props.components}/>
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
      components: state.components
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    init : () => dispatch(loadComponents())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsPage);
