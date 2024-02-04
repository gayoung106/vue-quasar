import { createApp } from "vue";
import { Quasar, SessionStorage, Notify } from "quasar";

import App from "./App.vue";

import "@quasar/extras/material-icons/material-icons.css";
import "quasar/dist/quasar.css";

createApp(App)
  .use(Quasar, {
    plugins: { SessionStorage, Notify }, // import Quasar plugins and add here
  })
  .mount("#app");
