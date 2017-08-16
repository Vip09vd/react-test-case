import './assets/styles/style.scss'
import React from 'react';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import Main from './containers/Main';
import {render} from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import rootReducer from "./reducers/root-reducer";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

render(
    <Provider store={store}>
        <Main/>
    </Provider>,
    document.getElementById('root')
);
