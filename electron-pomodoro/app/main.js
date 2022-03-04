const { app, BrowserWindow, ipcMain, Notification } = require('electron')
const {create: createMainWindow, show: showMainWindow, close: closeMainWindow} = require('./windows/main')
const darwinMenu = require('./trayAndMenu/darwin')
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

app.on('ready', () => {
  createMainWindow()
  darwinMenu.setTray()
  darwinMenu.setAppMenu()
  handleIPC()
})

app.on('activate', () => {
  showMainWindow()
})

app.on('second-instance', (event, commandLine, workingDirectory) => {
  // 当运行第二个实例时,将会聚焦到myWindow这个窗口
  showMainWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('before-quit', () => {
  closeMainWindow()
})

