const {crashReporter} = require('electron')

function init() {
    crashReporter.start({
        productName: 'įŠčé',
        companyName: 'yummy',
        submitURL: 'http://127.0.0.1:33855/crash',
    })
}
module.exports = {init}
