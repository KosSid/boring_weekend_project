import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

import './reset.css'
import './index.scss'


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <ErrorBoundary>
              <App />
          </ErrorBoundary>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
