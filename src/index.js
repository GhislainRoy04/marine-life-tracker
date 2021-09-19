'use strict';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import App from './app';

render(
    <Provider>
        <App/>
    </Provider>,
    document.querySelector('#root')
);