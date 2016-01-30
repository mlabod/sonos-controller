import { combineReducers } from 'redux';
const ipcRenderer = require('electron').ipcRenderer;

const playing = (state = true, action) => {

  switch (action.type) {
    case 'PLAY':
      ipcRenderer.send('play', true);
      return true;
    case 'PAUSE':
      ipcRenderer.send('play', false);
      return false;
    case 'NEXT':
      ipcRenderer.send('skip', 'next');
      return state;
    case 'PREV':
      ipcRenderer.send('skip', 'prev');
      return state;
    default:
      return state;
  }
};

const rooms = (state = [], action) => {

  switch (action.type) {
    case 'ROOM_INFO':
      return action.data
    default:
      return state;
  }
};

const song = (state = {}, action) => {

  switch (action.type) {
    case 'SONG_INFO':
      return {
        title: action.title,
        artist: action.artist,
        cover: action.cover
      }
    default:
      return state;
  }
};

const reducers = combineReducers({
  rooms,
  playing,
  song
});

export default reducers
