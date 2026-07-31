import { templateCompilerOptions } from '@tresjs/core'
import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
  vue({
    ...templateCompilerOptions,
  }),
  AutoImport({
    imports: ['vue'],
    dts: true,
  }),
],
  resolve: {
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
  },
},
})
