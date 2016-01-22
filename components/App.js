import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Sonos from './Sonos';
import reducers from '../reducers';

let store = createStore(reducers)

export default (
  <Provider store={store}>
    <Sonos />
  </Provider>
)
