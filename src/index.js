import React from 'react';
import {render, hydrate} from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

if(window.__initialData){
  hydrate(
    <Provider store={store}>
      <App />
      </Provider>,
    document.getElementById('root')
  )
  delete window.__initialData;
} else {
  render(
    <Provider store={store}>
      <App />
      </Provider>,
    document.getElementById('root')
  )
}
