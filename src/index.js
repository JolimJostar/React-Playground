import React from 'react';
import ReactDOM from 'react-dom';

import Greet from "./greet"
import Clock from "./clock"
import ActivateNukes from "./activate_nukes"

ReactDOM.render(
  <React.Fragment>
    <Greet />
    <Clock />
    <ActivateNukes />
  </React.Fragment>,
  document.getElementById('root')
);