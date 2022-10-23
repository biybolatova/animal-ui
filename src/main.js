import {createApp} from "vue"
import App from "./App.vue"
import router from "./router"
import "bootstrap-icons/font/bootstrap-icons.css"
import Toast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import components from "./components/UI"

const app = createApp(App)

components.forEach(component => {
    console.log("componentName: ", component.name, component)
    app.component(component.name, component)
})

app
    .use(router)
    // .use(Toast)
    .mount("#app")