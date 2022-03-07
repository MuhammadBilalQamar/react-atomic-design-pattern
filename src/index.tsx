import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';

import { BrowserRouter as Router } from 'react-router-dom';

// store
import store from './store';
import { Provider } from 'react-redux';

const ReactApp = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    <ReactApp />
  </React.StrictMode>,
  document.getElementById('root')
);
