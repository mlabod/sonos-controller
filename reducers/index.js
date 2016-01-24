import { combineReducers } from 'redux';
const ipcRenderer = require('electron').ipcRenderer;

const playing = (state = true, action) => {

  console.log(action.type);

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

const track = (state = {}, action) => {

  switch (action.type) {
    case 'INFO':
      return {
        title: action.title,
        artist: action.artist,
        cover: 'http://192.168.1.3:1400' + action.cover
      }
    default:
      return state;
  }
};

const reducers = combineReducers({
  playing,
  track
});

export default reducers
