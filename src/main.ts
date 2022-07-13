// 全局样式
import '@/assets/styles/index.scss';

import App from './App.vue';
import { createApp } from 'vue';
import { setupRouter } from '@/router';

async function bootstrap() {
  const app = createApp(App);

  // 挂在路由
  setupRouter(app);

  app.mount('#app');
}

bootstrap();
