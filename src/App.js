import React, { Component } from 'react';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './style.css';


import Dashboard from './component/dashboard';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
    }
  }
  render(){
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
