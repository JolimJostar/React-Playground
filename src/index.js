import React from 'react';
import ReactDOM from 'react-dom';

import Greet from "./greet"
import Clock from "./clock"
import ActivateNukes from "./activate_nukes"
import Buttons from "./all_buttons"

ReactDOM.render(
  <React.Fragment>
    <Greet />
    <Clock />
    <ActivateNukes />
    <Buttons />
  </React.Fragment>,
  document.getElementById('root')
);