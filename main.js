const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

function onReady () {
  win = new BrowserWindow({width: 900, height: 950})
  win.loadURL(url.format({
    pathname: path.join( __dirname, 'dist/angular-electron-example/index.html'),
    protocol: 'file:',
    slashes: true
  }))
}

app.on('ready', onReady);
