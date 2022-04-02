const install = (Vue) => {
    const requireDirective = require.context(".", true, /\.js/);
    requireDirective.keys().forEach(fileName => {
        if (fileName !== './index.js') {
            const key = fileName.replace(/(\.\/|\/index.js)/g, '')
            const config = requireDirective(fileName).default;
            console.log('******', fileName, key)
            console.log(config)
            Vue.directive(key, config);
        }
    })
}
export default {
    install
}