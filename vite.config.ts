/// <reference types='vitest' />

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  plugins: [react(), basicSsl()],
  test: {
    globals: true,
    setupFiles: ['./src/__tests__/setup.ts'],
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
});
