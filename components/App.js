import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Sonos from './Sonos';
import reducers from '../reducers';
import { songInfo } from '../actions';

const ipcRenderer = require('electron').ipcRenderer;

let store = createStore(reducers);
let oldTitle;

ipcRenderer.on('info', function(err, data) {
  if(data.title === oldTitle) return;
  store.dispatch(songInfo(data));
  oldTitle = data.title;
});

const SonosApp = () => (
  <div>
    <Sonos />
  </div>
);

export default (
  <Provider store={store}>
    <SonosApp />
  </Provider>
)
