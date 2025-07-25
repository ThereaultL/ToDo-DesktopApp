const { BrowserWindow, app } = require('electron');
require('@electron/remote/main').initialize();

function createWindow() {
  const win = new BrowserWindow({
    width: 500,
    height: 530,
    webPreferences: {
        enableRemoteModule: true,
    }
  });

  win.loadURL('http://localhost:3000');
}

app.on('ready', createWindow);

//Start MacOS logic
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
//End MacOS logic