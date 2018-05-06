import React from 'react';
import {connect} from 'react-redux';
import ComponentList from './ComponentList';

class ComponentsPage extends React.Component {
    render(){
        return(
            <div className="row">
                COMPONENT PAGE!!
                <div className="col-md-12">
                    <h1>PAGE COMPNENTI</h1>
                    <ComponentList components={this.props.components}/>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state, ownProps){
    console.log('MAP STATE TO PROPS!!!');
    console.log(state);
    console.log('-------');
    return {
        components: state.components
    };
};

export default connect(mapStateToProps)(ComponentsPage);
