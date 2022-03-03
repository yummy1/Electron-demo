<template>
  <div>
    <template v-if="controlText === ''">
      <div>你的控制码 <span onContextMenu=handleContextMenu >{{localCode}}</span></div>
      <input type="text" :value="remoteCode"/>
      <button onClick=startControl(remoteCode)>确认</button>
    </template>
    <h3 v-else>{{controlText}}</h3>
  </div>
</template>

<script>
import { watchEffect, ref } from 'vue';
// import {ipcRenderer, remote} from 'electron'
import './peer-puppet'
// const {Menu, MenuItem} = remote 
export default {
  name: 'App',
  setup() {
    let remoteCode = ref('')
    let localCode = ref('')
    // 0未连接，1已控制，2被控制
    let controlText = ref('')

    const startControl = () => {
        // ipcRenderer.send('control', remoteCode)
    }
    const login = async () => {
        // let code = await ipcRenderer.invoke('login')
        // localCode = code
    }

    // const handleControlState = (e, name, type) => {
    //     let text = ''
    //     if(type === 1) {
    //         text = `正在远程控制${name}`
    //     } else if(type === 2) {
    //         text = `被${name}控制中`
    //     } else {
    //         text = ''
    //     }
    //     controlText = text
    // }

    watchEffect(() => {
        login()
        // ipcRenderer.on('control-state-change', handleControlState)
        // return () => {
        //     ipcRenderer.removeListener('control-state-change', handleControlState)
        // }
    })
   
    const handleContextMenu = (e) => {
        e.preventDefault()
        // const menu = new Menu()
        // menu.append(new MenuItem({label: '复制', role: 'copy'}))
        // menu.popup()
    }

    return {
      handleContextMenu,
      remoteCode,
      startControl,
      controlText,
      localCode
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>
