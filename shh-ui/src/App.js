import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main';

class App extends Component {

  render() {
    return (
      <div id="page_container">
        <Header />
        <Main />
           APPLICATION PAGE
          {this.props.children}
      </div>
    );
  }
}
export default App;
