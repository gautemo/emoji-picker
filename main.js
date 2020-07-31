const { app, BrowserWindow } = require('electron')

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    autoHideMenuBar: true,
    icon: 'emoji-picker-icon.png'
  })

  // and load the index.html of the app.
  win.loadFile('app/dist/index.html')
}

app.whenReady().then(createWindow)