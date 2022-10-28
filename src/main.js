import { createApp } from 'vue';
import './assets/scss/main.scss';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* import specific icons */
import {
  faSun, faMoon, faLanguage, faBlog,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import vueI18n from './assets/js/i18n';
import './assets/tailwind.css';
import App from './App.vue';
import router from './router';
import store from './store';

/* add icons to the library */
library.add(faSun, faMoon, faLanguage, faGithub, faLinkedin, faBlog);
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(store);
app.use(router);
app.use(vueI18n);
app.mount('#app');
