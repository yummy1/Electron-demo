import { createApp } from 'vue'
import App from './App.vue'
import * as serviceWorker from './serviceWorker';

createApp(App).mount('#app')
serviceWorker.unregister();
