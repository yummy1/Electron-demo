//自动更新
const {app} = require('electron')
const { autoUpdater } =require("electron-updater");
const {send: sendMainWindow, setProgressBar} = require('./windows/main')
//执行自动更新检查
const feedUrl = 'http://127.0.0.1:33855/darwin?version=' + app.getVersion(); // 更新包位置
autoUpdater.setFeedURL(feedUrl);
let message = {
    error: '检查更新出错',
    checking: '正在检查更新……',
    updateAva: '检测到新版本，正在下载……',
    updateNotAva: '现在使用的就是最新版本，不用更新',
};
autoUpdater.on('error', function (error) {
    sendUpdateMessage(message.error)
});
autoUpdater.on('checking-for-update', function () {
    sendUpdateMessage(message.checking)
});
autoUpdater.on('update-available', function (info) {
    sendUpdateMessage(message.updateAva)

});
autoUpdater.on('update-not-available', function (info) {
    sendUpdateMessage(message.updateNotAva)
});

// 更新下载进度事件
autoUpdater.on('download-progress', function (progressObj) {
  console.log(progressObj)
  sendMainWindow('downloadProgress', progressObj)
  setProgressBar(progressObj.percent / 100);
})
autoUpdater.on('update-downloaded', function (event, releaseNotes, releaseName, releaseDate, updateUrl, quitAndUpdate) {
  console.log('更新完成')
  ipcMain.on('isUpdateNow', (e, arg) => {
    console.log("开始更新");
    //some code here to handle event
    autoUpdater.quitAndInstall();
  });

  sendMainWindow('isUpdateNow')
});

ipcMain.on("checkForUpdate",()=>{
  //执行自动更新检查
  autoUpdater.checkForUpdates();
})
function sendUpdateMessage(text) {
    sendMainWindow('message', text)
}