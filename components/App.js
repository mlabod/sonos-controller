import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CurrentSong from './CurrentSong';
import RoomSwitcher from './RoomSwitcher';
import reducers from '../reducers';
import { songInfo, roomInfo } from '../actions';

const ipcRenderer = require('electron').ipcRenderer;

let store = createStore(reducers);
let oldTitle;

ipcRenderer.on('info', function(err, data) {
  if(data.title === oldTitle) return;
  store.dispatch(songInfo(data));
  oldTitle = data.title;
});

ipcRenderer.on('rooms', function(err, data) {
  store.dispatch(roomInfo(data));
});

const SonosApp = () => (
  <div>
    <RoomSwitcher />
    <CurrentSong />
  </div>
);

export default (
  <Provider store={store}>
    <SonosApp />
  </Provider>
)
