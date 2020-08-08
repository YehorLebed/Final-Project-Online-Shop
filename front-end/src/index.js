import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './app';
import ErrorBoundry from './app/errorBoundry';

store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <BrowserRouter>
    <ErrorBoundry>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundry>
  </BrowserRouter>,
  document.getElementById('root'));