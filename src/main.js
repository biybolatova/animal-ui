import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "bootstrap-icons/font/bootstrap-icons.css"
import Toast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

createApp(App)
    .use(router)
    .use(Toast)
    .mount("#app")