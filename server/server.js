import React from "react";
import { createStore } from 'redux';
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import axios from 'axios';

import App from "../src/App";
import RenderFullPage from './renderFullPage'
import { BASE_URL } from '../src/network/url'
import reducer from "../src/redux/root-reducer";
import { setProgramsList } from '../src/redux/action'




const store = createStore(reducer);

export const getInitialData = (req, res) => axios.get(BASE_URL)
  .then(response => {
    store.dispatch(setProgramsList({data : response.data}))
    // store.dispatch({
    //   type: 'SET_PROGRAM_LIST',
    //   payload: { data : response.data}
    // })
    const htmlMarkrup = renderToString(<Provider store={store}><App /></Provider>)
    res.send(RenderFullPage(htmlMarkrup, store.getState().data));
  })
  .catch(err => {
    console.log('Error', err)
    res.send("SomeThing went Wrong")
  })