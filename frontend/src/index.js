import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';

import Store from './Store/'
import App from './Components/App';


import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root'));


registerServiceWorker();
