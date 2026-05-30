import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // استخدام المترجم الحديث لحل مشكلة legacy-js-api
        api: 'modern-compiler',
        // إسكات التحذيرات الصالحة فقط وتجنب القيم الملغية أو الخاطئة
        silenceDeprecations: ['import', 'color-functions', 'global-builtin']
      }
    }
  }
});