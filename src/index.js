'use strict';
import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import {
    applyMiddleware,
    createStore,
} from 'redux';

import App from './app';
import reducers from './reducers';
import sagas from './sagas';

const middleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(middleware));

middleware.run(sagas);

render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.querySelector('#root')
);
