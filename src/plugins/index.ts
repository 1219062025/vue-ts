import vue from '@vitejs/plugin-vue';
import type { PluginOption } from 'vite';

import { configHtmlPlugin } from './html';
import { configMockPlugin } from './mock';

export function setupPlugin(env: ImportMetaEnv, command: 'serve' | 'build') {
  const vitePlugins: PluginOption[] = [vue(), configHtmlPlugin(env), configMockPlugin(command)];
  return vitePlugins;
}
