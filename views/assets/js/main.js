'use strict';

import React from 'react'
import { render } from 'react-dom'

render(
  <div>
    {'this is react!!'}
    <div className="alert alert-primary" role="alert">
      {'A simple primary alert—check it out!333'}
    </div>
	</div>
  ,
  document.getElementById('app')
);