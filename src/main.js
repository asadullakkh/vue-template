import { createApp } from 'vue';
import './assets/styles/styles.scss';
import App from './App.vue';
export const app = createApp(App);
import i18n from './plugins/i18n';
import router from './router/index';
import axios from './plugins/axios';
import VueAxios from 'vue-axios';
import store from './store';
import {
	registerGlobalProperties,
	hideElement,
	addParams,
} from './helpers/global';

registerGlobalProperties.call(app, { hideElement, addParams });
app.use(router);
app.use(i18n);
app.use(VueAxios, axios);
app.use(store);
app.mount('#app');
