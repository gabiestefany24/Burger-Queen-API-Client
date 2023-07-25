/* import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),  VitePWA({ registerType: 'autoUpdate', devOptions: {
    enabled: true
  } })],
});
 */

import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      manifest: {
        name: 'Burger Queen',
        short_name: 'BQ',
        start_url: '.',
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        
        // Add other custom properties here if needed.
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
