import { combineReducers } from 'redux';

const player = (state = { playing:true } , action) => {
  switch (action.type) {
    case 'PLAY':
      return {
        playing: true
      };
    case 'STOP':
      return {
        playing: false
      };
    default:
      return state;
  }
};
const reducers = combineReducers({
  player
});

export default reducers
