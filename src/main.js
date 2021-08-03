import { createApp, reactive } from "vue";
import App from "./App.vue";
import store from "./store";
import './index.css'

// Create a reactive object
const GStore = reactive({ flashMessage: '' })

createApp(App).use(store).provide('GStore', GStore).mount("#app");
