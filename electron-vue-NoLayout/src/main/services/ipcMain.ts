import { ipcMain, dialog, BrowserWindow, IpcMainInvokeEvent } from 'electron'
import Server from '../server'
import { winURL } from '../config/StaticPath'
import DownloadFile from './downloadFile'
import Update from './checkupdate';

export default {
  Mainfunc(IsUseSysTitle: boolean) {
    const updater = new Update();
    ipcMain.handle('IsUseSysTitle', async (event: IpcMainInvokeEvent, args: unknown) => {
      return IsUseSysTitle
    })
    ipcMain.handle('windows-mini', (event, args) => {
      BrowserWindow.fromWebContents(event.sender)?.minimize()
    })
    ipcMain.handle('window-max', async (event, args) => {
      if (BrowserWindow.fromWebContents(event.sender)?.isMaximized()) {
        BrowserWindow.fromWebContents(event.sender)?.unmaximize()
        return { status: false }
      } else {
        BrowserWindow.fromWebContents(event.sender)?.maximize()
        return { status: true }
      }
    })
    ipcMain.handle('window-close', (event, args) => {
      BrowserWindow.fromWebContents(event.sender)?.close()
    })
    ipcMain.handle('start-download', (event, msg) => {
      new DownloadFile(BrowserWindow.fromWebContents(event.sender), msg.downloadUrl).start()
    })
    ipcMain.handle('check-update', (event, args) => {
      updater.checkUpdate(BrowserWindow.fromWebContents(event.sender))
    })
    ipcMain.handle('confirm-update', () => {
      updater.quitInstall()
    })
    ipcMain.handle('open-messagebox', async (event, arg) => {
      const res = await dialog.showMessageBox(BrowserWindow.fromWebContents(event.sender), {
        type: arg.type || 'info',
        title: arg.title || '',
        buttons: arg.buttons || [],
        message: arg.message || '',
        noLink: arg.noLink || true
      })
      return res
    })
    ipcMain.handle('open-errorbox', (event, arg) => {
      dialog.showErrorBox(
        arg.title,
        arg.message
      )
    })
    ipcMain.handle('statr-server', async () => {
      try {
        const serveStatus = await Server.StatrServer()
        console.log(serveStatus)
        return serveStatus
      } catch (error) {
        dialog.showErrorBox(
          '??????',
          error
        )
      }
    })
    ipcMain.handle('stop-server', async (event, arg) => {
      try {
        const serveStatus = await Server.StopServer()
        return serveStatus
      } catch (error) {
        dialog.showErrorBox(
          '??????',
          error
        )
      }
    })
    ipcMain.handle('open-win', (event, arg) => {
      const ChildWin = new BrowserWindow({
        height: 595,
        useContentSize: true,
        width: 842,
        autoHideMenuBar: true,
        minWidth: 842,
        show: false,
        frame: IsUseSysTitle,
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
          webSecurity: false,
          // ?????????????????????????????????devTools
          devTools: process.env.NODE_ENV === 'development',
          // devTools: true,
          // ???macos?????????????????????
          scrollBounce: process.platform === 'darwin'
        }
      })
      ChildWin.loadURL(winURL + `#${arg.url}`)
      ChildWin.webContents.once('dom-ready', () => {
        ChildWin.show()
        if (process.env.NODE_ENV === 'development') {
          ChildWin.webContents.openDevTools({ mode: 'undocked', activate: true })
        }
        ChildWin.webContents.send('send-data', arg.sendData)
        if (arg.IsPay) {
          // ???????????????????????????????????????
          const testUrl = setInterval(() => {
            const Url = ChildWin.webContents.getURL()
            if (Url.includes(arg.PayUrl)) {
              ChildWin.close()
            }
          }, 1200)
          ChildWin.on('close', () => {
            clearInterval(testUrl)
          })
        }
      })
    })
  }
}
