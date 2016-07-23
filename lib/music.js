const electron = require('electron');
const sonos = require('sonos');
const xml2js = require('../node_modules/sonos/node_modules/xml2js');
const Listener = require('../node_modules/sonos/lib/events/listener');
const parser = new xml2js.Parser({explicitArray: false});

var host = '192.168.178.24';
var port = 1400;
var baseUrl = 'http://' + host + ':' + port;
var eventURL = '/MediaRenderer/AVTransport/Event';
var s = new sonos.Sonos(host);
var l = new Listener(s);

var rooms = [];

function getRooms(cb) {
  sonos.search(function(device, model) {
    device.getZoneAttrs(function(err, attrs) {
      device.getZoneInfo(function(err, info) {

        attrs.ip = info.IPAddress;
        rooms.push(attrs);
        cb(rooms);
      });
    });
  });
}

function startListening(cb) {
  l.listen(function (err) {
    if (err) throw err

    l.addService(eventURL, function (error, sid) {
      if (error) throw err
    });

    l.on('serviceEvent', function (endpoint, sid, data) {
      parser.parseString(data.LastChange, function (err, lastChange) {
        var meta = lastChange.Event.InstanceID.CurrentTrackMetaData.$.val;
        parser.parseString(meta, function (err, meta) {
          var track = meta['DIDL-Lite']['item'];
          var info = {
            artist:track['dc:creator'],
            title:track['dc:title'],
            album:track['upnp:album'],
            cover:baseUrl + track['upnp:albumArtURI']
          }
          cb(info);
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
  startListening: startListening,
  getRooms: getRooms
}
