import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://importausa.com/loja/', // Substitua 'loja' pelo nome do repositório no GitHub
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
