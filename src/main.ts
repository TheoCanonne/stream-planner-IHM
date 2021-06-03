import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faTimes);
library.add(faThumbsUp);


const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(store).use(router).mount("#app");