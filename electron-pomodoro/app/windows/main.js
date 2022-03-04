const {BrowserWindow} = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

let win
let willQuitApp = false
function create () {
    win = new BrowserWindow({
        width: 250,
        height: 350,
        webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
        },
        show: false,
    })

    win.on('close', (e) => {
        if (willQuitApp) {
            win = null;
        } else {
            e.preventDefault();
            win.hide();
        }
    })

    win.on('ready-to-show', () => {
        win.show()
    })

    win.loadFile(path.resolve(__dirname, '../index.html'))

    // win.webContents.openDevTools()

}

function send(channel, ...args) {
    win.webContents.send(channel, ...args)
}
function show() {
    if (win.isMinimized()) win.restore()
    win.show()
}

function close() {
    willQuitApp = true
    win.close()
}

function setProgressBar(val) {
    win.setProgressBar(val)
}

module.exports = {create, send, show, close, setProgressBar}
