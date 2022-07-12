import { defineConfig, loadEnv, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

import { viteMockServe } from 'vite-plugin-mock';

const path = require('path');

export default ({ command, mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd());
  env;

  return defineConfig({
    resolve: {
      // 设置了路径别名后还需要在tsconfig.json中配置ts中的别名，否则ts无法识别‘@’，虽然不影响代码运行，但是会红色波浪线
      alias: { '@': path.resolve(__dirname, 'src') }
    },
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve'
      })
    ]
  });
};
