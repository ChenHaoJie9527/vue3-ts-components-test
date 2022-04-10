import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import AutoComponentImport from 'unplugin-auto-import/vite';
import DefineOptions from 'unplugin-vue-define-options/vite';
export default defineConfig({
  plugins: [
    Vue({
      template: {
        // 配置isCustomElement是为了支持原生自定义元素。如果自定义的标签不是vue组件的话，编译器在解析的时候会抛出错误提示。需要做以下配置
        compilerOptions: {
          isCustomElement: () => {
            return false;
          },
        },
      },
    }),
    DefineOptions(),
    AutoComponentImport({
      imports: [
        'vue',
        {
          '[package-name]': ['[import_names]', ['[from]', '[alias]']],
        },
      ],
      dts: '../typings/auto-imports.d.ts',
      // eslint报错解决
      eslintrc: {
        enabled: false, // Default `false`
        filepath: '../.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
  },
});
