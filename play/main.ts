import { createApp } from "vue";
import App from "./App.vue";
import TgIcon from "@tg-ui/components/icon";
const app = createApp(App);
app.use(TgIcon) // 需要符合Plugin_2类型
app.mount("#app");