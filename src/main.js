const { createApp } = require('vue');
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import scrollbarDirective from './hooks/scrollbarDirective';

const app = createApp(App);
app.use(scrollbarDirective);
app.use(Antd).mount('#app');
