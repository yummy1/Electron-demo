const {crashReporter} = require('electron')

function init() {
    crashReporter.start({
        productName: '番茄钟',
        companyName: 'yummy',
        submitURL: 'http://127.0.0.1:33855/crash',
    })
}
module.exports = {init}
