import { defineConfig, loadEnv, ConfigEnv } from 'vite';

import { setupPlugin } from './src/plugins';

const path = require('path');

export default ({ mode, command }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd()) as ImportMetaEnv;

  return defineConfig({
    base: '/',
    resolve: {
      // 设置了路径别名后还需要在tsconfig.json中配置ts中的别名，否则ts无法识别‘@’，虽然不影响代码运行，但是会红色波浪线
      alias: { '@': path.resolve(__dirname, 'src') }
    },
    plugins: setupPlugin(env, command)
  });
};
