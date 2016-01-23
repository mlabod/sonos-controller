import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Sonos from './Sonos';
import reducers from '../reducers';

let store = createStore(reducers)

console.log(store.getState());

export default (
  <Provider store={store}>
    <Sonos />
  </Provider>
)
