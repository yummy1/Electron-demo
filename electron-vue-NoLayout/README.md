# Electron-Vue-template

> 这是一个基于electron的vue最基本的模板，其中前端技术栈则用到vue全家桶，axios作为http请求，而本地数据库则是nedb。现在合并了花裤衩的vue-admin中的东西侧栏样式是在` src/renderer/layout/components/sidebar `文件夹中,大家可以根据需求进行个性化更改,鄙人后续会将这个和花裤衩大大的同步.

- 因为花裤衩大大的ELECTRON版本已经一年没有更新了,而且ELECTRON,vue,elementui,都已经迭代太多,刚好我司有这方面的需求,我就在vue-electron脚手架生成的项目基础上,将花裤衩大大的项目核心组件提取出来合并到这个项目中，在我简单的封装了axios和db．以及electron常用的信息弹窗，错误弹窗，具体文档地址：[中文在线文档](https://umbrella22.github.io/electron-vue-template-doc/)，[国内访问地址](https://zh-sky.gitee.io/electron-vue-template-doc/)。

### 请确保您的node版本大于等于16.
#### 如何安装

```bash
npm config edit
# 该命令会打开npm的配置文件，请在空白处添加
# registry=https://registry.npmmirror.com
# ELECTRON_MIRROR=https://npmmirror.com/mirrors/electron/
# ELECTRON_CUSTOM_DIR="{{ version }}"
# ELECTRON_BUILDER_BINARIES_MIRROR=https://npmmirror.com/mirrors/electron-builder-binaries/
# 然后关闭该窗口，重启命令行.
# 使用yarn安装
yarn or yarn install

# 启动之后，会在9080端口监听
yarn dev

# build命令在不同系统环境中，需要的的不一样，需要自己根据自身环境进行配置
yarn build

```

---

这个项目使用了 [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[8fae476](https://github.com/SimulatedGREG/electron-vue/tree/8fae4763e9d225d3691b627e83b9e09b56f6c935) using [vue-cli](https://github.com/vuejs/vue-cli). 文档你们可以在这里看到: [这里](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
这是花裤衩大大原本的[地址](https://github.com/PanJiaChen/electron-vue-admin)

# 更新日志
- 2021年04月13日：例行更新依赖，并跟进webpack5，使用esbuild-loader对渲染进程的css和js进行处理，加快编译速度。
- 2020年10月12日：例行更新基础依赖，准备跟进webpack5，去除已经废弃的插件
- 2020年09月12日：更新依赖，去除.electron-vue中的冗余代码，将已经转入维护模式happypack修改为thread-loader。
- 2020年09月10日：例行更新依赖，感谢 @BelinChung 贡献代码，修正bug。
- 2020年04月30日：添加内置服务端关闭方法，进一步简化登录流程；多窗口文档已就绪，服务端说明已补充。
- 2020年04月29日：添加了路由多窗口示例，修复web打包，提升依赖；文档还未就绪
- 2020年02月09日：添加[中文在线文档](https://umbrella22.github.io/electron-vue-template-doc/)，[国内访问地址](https://zh-sky.gitee.io/electron-vue-template-doc/)
- 剔除win打包依赖，因为太大了，将它放到码云的额外仓库中，[地址](https://gitee.com/Zh-Sky/HardToDownloadLib)
- 2020年02月06日更新：激进分支更新至8.0.0.
- 2020年01月09日更新：例行更新依赖，在dev中加入了端口监听检测，如果9080端口被占用就会自动向后开启一个端口号并使用，同时在config/index.js的dev中加入了端口设置，可以快捷设置端口号而不用去更改webpack的配置了。
- 2019年12月18日更新：我在build文件夹内添加了windows的打包依赖，在打包爆错的话，可以尝试使用/build/lib内的压缩包，记得看使用说明哦~
- 2019年11月22日更新：得益于群里老哥的提醒，通过修改系统环境变量得到了通过yarn下载electron失败的问题，具体操作如下：用户环境变量中新增两个个变量，一个是变量名为`ELECTRON_MIRROR`，变量值为`https://npm.taobao.org/mirrors/electron/`，另一个是变量名为`registry`，变量值为`https://registry.npm.taobao.org/`，然后系统变量中同样也加上这两个值，完成之后，删除node_module文件夹。然后执行yarn install，如果还是提示未安装，那就去electron文件夹内执行一次yarn install，就好了。这样的话，不仅仅只是yarn更快了，electron的rebuild也会加速很多。所以推荐使用yarn。
（优先尝试）使用npm config edit打开npm配置文件，添加上electron_mirror=https://cdn.npm.taobao.org/dist/electron/ ，然后重启窗口删除node_module文件夹，重新安装依赖即可。
- 2019年11月19日更新：更新了不使用updater进行全量更新的方法，但是该方法不会校验安装包md5值，也就是说，包如果被拦截了。。可能就会出问题，这一点我正在想办法处理。
- 2019年10月31日更新：升级electron版本至7，但是需要做一些修改，由于淘宝的问题，导致electron新的下载器出现故障，故我们需要对electron的下载器做一些更改，这非常容易，不用担心
首先我们在淘宝代理设置下，安装完成依赖，此时是报错的，现在进入项目的node_modules文件夹内找到electron,点击进入，然后修改其中的package.json文件，修改dependencies对象中的依赖为：
```json
  "dependencies": {
    "@types/node": "^12.0.12",
    "extract-zip": "^1.0.3",
    "electron-download": "^4.1.0"
  },
```
然后我们需要再修改install.js中的代码（实际就是6中的install代码）
```js
#!/usr/bin/env node

var version = require('./package').version

var fs = require('fs')
var os = require('os')
var path = require('path')
var extract = require('extract-zip')
var download = require('electron-download')

var installedVersion = null
try {
  installedVersion = fs.readFileSync(path.join(__dirname, 'dist', 'version'), 'utf-8').replace(/^v/, '')
} catch (ignored) {
  // do nothing
}

if (process.env.ELECTRON_SKIP_BINARY_DOWNLOAD) {
  process.exit(0)
}

var platformPath = getPlatformPath()

var electronPath = process.env.ELECTRON_OVERRIDE_DIST_PATH || path.join(__dirname, 'dist', platformPath)

if (installedVersion === version && fs.existsSync(electronPath)) {
  process.exit(0)
}

// downloads if not cached
download({
  cache: process.env.electron_config_cache,
  version: version,
  platform: process.env.npm_config_platform,
  arch: process.env.npm_config_arch,
  strictSSL: process.env.npm_config_strict_ssl === 'true',
  force: process.env.force_no_cache === 'true',
  quiet: process.env.npm_config_loglevel === 'silent' || process.env.CI
}, extractFile)

// unzips and makes path.txt point at the correct executable
function extractFile (err, zipPath) {
  if (err) return onerror(err)
  extract(zipPath, { dir: path.join(__dirname, 'dist') }, function (err) {
    if (err) return onerror(err)
    fs.writeFile(path.join(__dirname, 'path.txt'), platformPath, function (err) {
      if (err) return onerror(err)
    })
  })
}

function onerror (err) {
  throw err
}

function getPlatformPath () {
  var platform = process.env.npm_config_platform || os.platform()

  switch (platform) {
    case 'darwin':
      return 'Electron.app/Contents/MacOS/Electron'
    case 'freebsd':
    case 'linux':
      return 'electron'
    case 'win32':
      return 'electron.exe'
    default:
      throw new Error('Electron builds are not available on platform: ' + platform)
  }
}
```
然后执行npm i 即可完成安装，至于打包的话，您可能需要去淘宝镜像手动下载并且放好位置，才能完成打包操作，不然依旧还是报下载错误的信息。
- 2019年10月18日更新：不知不觉中倒也过去了一个月，啊哈哈这次更新给大家带来的是updater的示例，这依旧是个实验特性，所以在新分支中才可以使用，使用方式则是，安装依赖，
运行 `npm run update:serve` 来启动这个node服务器，然后您如果想在dev的时候就看到效果需要先运行build拿到 `latest.yml`文件，然后将其更名为 `dev-app-update.yml` 放入`dist/electron`中，和`main.js`同级，然后你需要关闭或者排除webpack的自动清除插件(我已经屏蔽了，所以无需大家自己动手)，然后点击软件中的检查更新即可，记住当软件正在运行的时候，是无法应用安装的，所以您需要关闭之后方可安装。这并不是一个错误！

- 2019年9月18日更新：修正生产环境时，没有正确去除控制台输出的问题，双分支例行更新依赖，修正ui部分颜色问题，日后准备使用element主题功能
- 2019年9月16日更新：去除easymock，直接粗暴更改登陆验证，如有需要请自行修改，例行更新新分支依赖，修正当自定义头部和系统头部互换时，布局不会做出相应变化的问题。
- 2019年9月3日更新：修正了当nodejs >= 12时，出现process未定义的问题，新分支加入自定义头部，现在我们可以做出更cooool~~的效果了。
- 2019年8月20日更新：添加登录拦击，实现登录功能，在dev中加入关闭ELECTRON无用控制台输出，新分支例行更新依赖，加入生产环境屏蔽f12按键。
- 2019年8月13日更新：将新分支的所有依赖均更新至最新（但是我觉得，babel似乎有些东西不需要，还是保留着吧，日后测试后移除）依赖更新之后通过打包和dev测试
- 2019年8月12日更新：添加一个新分支，该新分支后续将会持续保持ELECTRON（包括其对应的辅助组件）的版本处于最新状态，去除了单元测试和一些无用的文件。master分支中则是为路由添加新参数具体
用途，详看路由中的注释
- 2019年8月10日更新：添加各个平台的build脚本，当您直接使用build时，则会打包您当前操作系统对应的安装包，mac需要在macos上才能进行打包，而linux打包win的话，需要wine的支持，否则会失败
- 2019年8月4日更新：修正原webpack配置中没有将config注入的小问题，添加了拦截实例，修改了侧栏，侧栏需要底色的请勿更新，此更新可能会导致侧栏底色无法完全覆盖（待修正），添加axios接口示例，待测。
- 2019年8月1日更新：将node-sass版本更新至最新版本，尝试修正由于nodejs环境是12版导致失败（注意！此次更新可能会导致32位系统或者nodejs版本低于10的用户安装依赖报错）去除路由表中重复路由，解决控制台无端报错问题。
