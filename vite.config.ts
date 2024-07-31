import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import libCss from 'vite-plugin-libcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true, exclude: ['**/*.stories.tsx', '**/*.stories.ts', 'vite.config.ts'] }),
    libCss(),
  ],
  root: './',
  build: {
    lib: {
      name: '@eveot-rp/ui',
      entry: path.resolve(__dirname, './src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-icons', 'react-icons/tb', '@tabler/icons-react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-icons': 'ReactIcons',
          'react-icons/tb': 'tbicons',
        },
        assetFileNames: '[name].[ext]',
        chunkFileNames: '[name].[hash].js',
        entryFileNames: '[name].[hash].js',
        minifyInternalExports: true,
      },
    },
    cssMinify: 'lightningcss',
  },
  server: {
    fs: {
      cachedChecks: false,
    },
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@legacycomponents': path.resolve(__dirname, './src/legacycomponents'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    },
  },
});
