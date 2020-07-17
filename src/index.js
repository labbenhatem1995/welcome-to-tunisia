import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import{TunisiaProvider} from './context';


ReactDOM.render(
  <TunisiaProvider>
    <Router>
      <App />
    </Router>
  </TunisiaProvider>,
  document.getElementById('root')
);


serviceWorker.unregister();
