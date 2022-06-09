import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import scrollbarDirective from './hooks/scrollbarDirective';
import router from './router/router';
const app = createApp(App);
app.use(router);
app.use(scrollbarDirective);
app.use(Antd).mount('#app');
