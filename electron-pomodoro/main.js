const { app, BrowserWindow, ipcMain, Notification } = require('electron')
let mainWindow;
function handleIPC() {
    ipcMain.handle('notification', async (e, {body, title, actions, closeButtonText}) => {
        let res = await new Promise((resolve, reject) => {
            console.log({
                title,
                body,
                actions,
                closeButtonText
            })
            let notification = new Notification({
                title,
                body,
                actions,
                closeButtonText
            })
            notification.show()
            notification.on('action', function(event) {
                resolve({event: 'action'})
            })
            notification.on('close', function(event) {
                resolve({event: 'close'})
            })
        })
        return res
    })
}

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 250,
    height: 350,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  mainWindow.loadFile('index.html')

  // mainWindow.webContents.openDevTools({mode:'right'})
}

app.whenReady().then(() => {
  createWindow()

  handleIPC()

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

