import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './global.css';

/**
 * React.StrictMode is throwing a warning when a component is doing a transition e.g. openning a drawer
 * or openning the user options, but it's better to leave the StrictMode wrapper rather than removing it
 * since this warning is related to Material UI not the code of this of this project.
 * Issue links:
 * https://stackoverflow.com/questions/61220424/material-ui-drawer-finddomnode-is-deprecated-in-strictmode
 * https://github.com/mui-org/material-ui/issues/20561
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
