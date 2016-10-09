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
    titleBarStyle:'hidden-inset',
    resizable:false
  });

  mainWindow.loadURL('file://' + __dirname + '/static/index.html');

  mainWindow.webContents.on('dom-ready', function () {

    music.getRooms(function (data) {
      console.log('HELLO THEE', data)
      mainWindow.webContents.send('rooms', data);
    });
  });

  ipcMain.on('play', music.toggle);
  ipcMain.on('skip', music.skip);

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
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
