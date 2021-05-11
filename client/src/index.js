import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import {Provider} from 'react-redux'
import {store} from './store/configureStore'

import './reset.css'
import './index.scss'


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ErrorBoundary>
                    <App/>
                </ErrorBoundary>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
