# Environment

| Package name | Version | Site                                                                                                                                                                                    |
|--------------| ------- |-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Node.js      | 16.13.2 | [Node.js](https://nodejs.org/en/)                                                                                                                                                       |
| npm          | 8.4.0   | [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)                                                                                                                |
| Angular cli  | 13.2.0  | [Angular CLI](https://github.com/angular/angular-cli),  [Angular CLI Overview and Command Reference](https://angular.io/cli), [Karma](https://karma-runner.github.io/latest/index.html) |
| Electron     | 17.0.0  | [Electron]()                                                                                                                                                                            |

# Install

## Install Node.js and npm

Node.js https://nodejs.org/en/

If you want to update npm, type like as follows

``` 
%> npm install -g npm@8.4.0
```

## Install Angular

```
%> npm install -g @angular/cli
```

## Clone the repository

```
%> git clone https://github.com/siro-2021/angular-electron-example.git
```

##  Install dependencies
```
%> npm install
```

## Run
```
%> npm run electron
```

# Setting to insert Electron to Angular environment.
1. Make angular environment.
```
%> ng new angular-electron-example
```

2. Install dependencies in the directory you have made.
```
%> npm install
```

3. Install Electron
```
%> npm install electron
```

5. Insert a script to build & run into a scripts section in package.json

   ```
   "scripts": {
       "electron": "ng build && electron ."
   }
   ```

6. Insert a line `"main" : "main.js"` to package.json.

7. Make main.js in the top directory.

   ```
   const {app, BrowserWindow} = require('electron');
   const url = require('url');
   const path = require('path');
   
   function onReady () {
     win = new BrowserWindow({width: 900, height: 950})
     win.loadURL(url.format({
       pathname: path.join(
         __dirname,
         'dist/angular-electron-example/index.html'),
       protocol: 'file:',
       slashes: true
     }))
   }
   
   app.on('ready', onReady);
   ```

8. Change` <base href="/">` to `<base href="./">` in src/index.html

9. Run
```
%> npm run electron
```

<img src="doc/electron-welcome-page.png" width="400" alt="The first result of introducing Electron."/>
