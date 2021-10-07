import React from 'react';
import ReactDOM from 'react-dom';

import Greet from "./greet"
import Clock from "./clock"
import ButtonCount from "./button"
import ButtonState from "./button_state"

ReactDOM.render(
  <React.Fragment>
    <Greet />
    <Clock />
    <ButtonCount />
    <br></br>
    <br></br> 
    <ButtonState />
  </React.Fragment>,
  document.getElementById('root')
);