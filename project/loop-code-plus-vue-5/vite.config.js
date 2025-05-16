import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path' 
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import fileURLToPath from 'node:url'
import URL from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueJsx(),
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver(),IconsResolver()],
    }),
    Icons(
      {
        autoInstall: true,
        compiler: "vue3",
      }
    ),
  ],
  base: './',
  resolve: {
		alias: {   //配置路径别名
			'@': path.resolve(__dirname, 'src')
      //'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
  server: {
    proxy: {
      '/api': {
        target: ' http://192.168.115.15:8080/', // 凡是遇到 /api 路径的请求，都映射到 target 属性
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // 重写 api 为 空，就是去掉它
      }
    }
  },
})
