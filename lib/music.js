const Sonos = require('sonos').Sonos;

var s = new Sonos('192.168.1.3');

function toggle(playing) {
  if(playing) {
    s.play(function(){});
  } else {
    s.pause(function(){});
  }
}

function skip(state) {
  if(state === 'next') {
    s.next(function(){});
  } else if (state === 'prev') {
    s.previous(function(){});
  }
}

function getTrack(cb) {
  s.currentTrack(function(err, data) {
    cb(data);
  });
}

function getState(cb) {
  s.getCurrentState(function(err, data) {
    cb(data);
  });
}

module.exports = {
  getTrack:getTrack,
  getState: getState,
  toggle:toggle,
  skip:skip
}
