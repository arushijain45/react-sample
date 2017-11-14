import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store';
import App from './components/App';
import { Provider } from 'react-redux';

const store = configureStore();
render((
    <Router>
        <Provider store={store}>
          <App pokemon={window.__PRELOADED_STATE__}/>
        </Provider>
    </Router>),
    document.getElementById('root')
);
