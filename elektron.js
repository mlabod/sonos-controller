'use strict';

const electron = require('electron');
const music = require('./lib/music');

const app = electron.app;
const ipcMain = electron.ipcMain;
const BrowserWindow = electron.BrowserWindow;

const room = 'Living Room';
let mainWindow;

function createWindow () {

  mainWindow = new BrowserWindow({
    width: 300,
    height: 300,
    titleBarStyle:'hidden-inset'
  });

  mainWindow.loadURL('file://' + __dirname + '/static/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });

  ipcMain.on('play', function (ev, playing) {
    console.log('onPlay', playing);
    music.toggle(playing);
  });

  ipcMain.on('skip', function (ev, state) {
    console.log('onSkip', state);
    music.skip(state);
  });

  setInterval(function() {
    music.getTrack(function (data) {
      mainWindow && mainWindow.webContents.send('info', data);
    });
  }, 2000);
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
