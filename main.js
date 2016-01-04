'use strict';
const electron = require('electron');
const GlobalShortcut = require('global-shortcut');
const Menu = require('menu');
const Sh = require('shell');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow; 

const repo = "https://github.com/xasos/overcast-desktop"

let mainWindow;

app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  initMenu();

  mainWindow = new BrowserWindow({width: 1024, height: 768});
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
    GlobalShortcut.unregisterAll();
  });

  initPlayerButtons();
});

function initPlayerButtons() {
  GlobalShortcut.register('MediaPlayPause', function() {
    var code = 'alert();';
    mainWindow.webContents.executeJavaScript(code);
  });
  
  GlobalShortcut.register('MediaNextTrack', function () {
    var code = 'triggerKeyCode(document.body, 39);';
    mainWindow.webContents.executeJavaScript(code);
  });

  GlobalShortcut.register('MediaPreviousTrack', function () {
    var code = 'triggerKeyCode(document.body, 37);';
    mainWindow.webContents.executeJavaScript(code);
  });  
};

// Menu technique borrowed from @importre's gpmp
function initMenu() {
  var template;
  if (process.platform == 'darwin') {
    template = [{
      label: 'Overcast',
      submenu: [{
        label: 'About Overcast',
        selector: 'orderFrontStandardAboutPanel:'
      }, {
        type: 'separator'
      }, {
        label: 'Hide Overcast',
        accelerator: 'Command+H',
        selector: 'hide:'
      }, {
        label: 'Hide Others',
        accelerator: 'Command+Shift+H',
        selector: 'hideOtherApplications:'
      }, {
        label: 'Show All',
        selector: 'unhideAllApplications:'
      }, {
        type: 'separator'
      }, {
        label: 'Quit',
        accelerator: 'Command+Q',
        click: function () {
          app.quit();
        }
      }]
    }, {
      label: 'View',
      submenu: [{
        label: 'Reload',
        accelerator: 'Command+R',
        click: function () {
          var focusedWindow = BrowserWindow.getFocusedWindow();
          if (focusedWindow)
            focusedWindow.reload();
        }
      }, {
        label: 'Toggle Full Screen',
        accelerator: 'Ctrl+Command+F',
        click: function () {
          var focusedWindow = BrowserWindow.getFocusedWindow();
          if (focusedWindow)
            focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
        }
      }, {
        label: 'Toggle Developer Tools',
        accelerator: 'Alt+Command+I',
        click: function () {
          var focusedWindow = BrowserWindow.getFocusedWindow();
          if (focusedWindow)
            focusedWindow.toggleDevTools();
        }
      }]
    }, {
      label: 'Window',
      submenu: [{
        label: 'Minimize',
        accelerator: 'Command+M',
        selector: 'performMiniaturize:'
      }, {
        label: 'Close',
        accelerator: 'Command+W',
        selector: 'performClose:'
      }, {
        type: 'separator'
      }, {
        label: 'Bring All to Front',
        selector: 'arrangeInFront:'
      }]
    }, {
      label: 'Help',
      submenu: [{
        label: 'Learn More',
        click: function () {
          Sh.openExternal(repo)
        }
      }, {
        label: 'Documentation',
        click: function () {
          Sh.openExternal(repo)
        }
      }]
    }];
  } else {
    template = [{
      label: '&File',
      submenu: [{
        label: '&Close',
        accelerator: 'Ctrl+W',
        click: function () {
          var focusedWindow = BrowserWindow.getFocusedWindow();
          if (focusedWindow)
            focusedWindow.close();
        }
      }]
    }, {
      label: '&View',
      submenu: [{
        label: '&Reload',
        accelerator: 'Ctrl+R',
        click: function () {
          var focusedWindow = BrowserWindow.getFocusedWindow();
          if (focusedWindow)
            focusedWindow.reload();
        }
      }, {
        label: 'Toggle &Full Screen',
        accelerator: 'F11',
        click: function () {
          var focusedWindow = BrowserWindow.getFocusedWindow();
          if (focusedWindow)
            focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
        }
      }, {
        label: 'Toggle &Developer Tools',
        accelerator: 'Alt+Ctrl+I',
        click: function () {
          var focusedWindow = BrowserWindow.getFocusedWindow();
          if (focusedWindow)
            focusedWindow.toggleDevTools();
        }
      }]
    }, {
      label: 'Help',
      submenu: [{
        label: 'Learn More',
        click: function () {
          Sh.openExternal(repo)
        }
      }, {
        label: 'Documentation',
        click: function () {
          Sh.openExternal(repo)
        }
      }, {
        label: 'Search Issues',
        click: function () {
          Sh.openExternal(issues)
        }
      }]
    }];
  }

  var menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}
