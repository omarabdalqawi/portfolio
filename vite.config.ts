import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',  // تغيير مجلد الإخراج إلى build
  },
    base: '/portfolio/',  // مسار المستودع في GitHub
  optimizeDeps: {
    exclude: ['lucide-react'],
    
  },
});
