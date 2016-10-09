const sonos = require('sonos');

function getRooms(cb) {
  sonos.search(function(device, model) {
    device.getZoneAttrs(function(err, attrs) {
      device.getZoneInfo(function(err, info) {
        cb({
          ip: info.IPAddress,
          name: attrs.CurrentZoneName,
          controller: new sonos.Sonos(info.IPAddress)
        });
      });
    });
  });
}

function toggle(err, playing) {
  if(playing) {
    s.play(function(){});
  } else {
    s.pause(function(){});
  }
}

function skip(err, state) {
  if(state === 'next') {
    s.next(function(){});
  } else if (state === 'prev') {
    s.previous(function(){});
  }
}

module.exports = {
  toggle:toggle,
  skip:skip,
  getRooms: getRooms
}
