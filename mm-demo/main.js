const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 1400,
    height: 1000,
    // webPreferences: {
    //   preload: path.join(__dirname, 'preload.js')
    // }
  })

  // win.loadFile('index.html')
  win.loadURL('http://10.17.130.100:8501')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

