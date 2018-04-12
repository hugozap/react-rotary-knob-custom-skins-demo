import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Knob } from "react-rotary-knob";
import transitionSkin from './skins/transition1'
import morphSkin from './skins/morph-path';


class App extends Component {
  render() {
    return (
      <div className="App">
          <a href="https://github.com/hugozap/react-rotary-knob-custom-skins-demo"> Source (Github) </a>
          <Knob preciseMode={false} style={{width:'300px', height:'300px'}} min={0} max={100} skin={transitionSkin} />
          <Knob preciseMode={false} style={{width:'300px', height:'300px'}} min={0} max={100} skin={morphSkin} />

      </div>
    );
  }
}

export default App;
