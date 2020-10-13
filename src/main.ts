// Vue Imports
import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import {store} from "./store";

// External Library Imports
import { FontAwesomeIcon } from '@/plugins/font-awesome'

// Styles
import './assets/styles/index.pcss'

const app = createApp(App)
    .use(store)
    .use(router)
    .component('fa', FontAwesomeIcon)

app.mount("#app");
