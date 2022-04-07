import { createApp } from "vue";
import "./assets/styles/styles.scss";
import App from "./App.vue";
export const app = createApp(App);
import i18n from "./plugins/i18n";
import router from "./plugins/vue-router";

app.use(router);
app.use(i18n);
app.mount("#app");
