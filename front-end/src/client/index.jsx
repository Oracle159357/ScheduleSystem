import React from 'react';
import ReactDOM from 'react-dom';

import 'babel-polyfill';
import { Provider } from 'react-redux'
import App from './app';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('content')
);