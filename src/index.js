import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App'


ReactDOM.render(
  <App collasible={false} active ="2">
  </App>
   ,
  document.getElementById('root'));

registerServiceWorker();

