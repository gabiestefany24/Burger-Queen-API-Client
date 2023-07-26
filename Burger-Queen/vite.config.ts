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
        icons: [
          {
            'src': './src/assets/addNewProduct.png',
            'sizes': '49x49',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': './src/assets/añadir.png',
            'sizes': '24x24',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': './src/assets/cancelorange.png',
            'sizes': '24x24',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': './src/assets/cancelwhite.png',
            'sizes': '24x24',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': './src/assets/checkgreen.png',
            'sizes': '24x24',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': './src/assets/checkwhite.png',
            'sizes': '24x24',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': './src/assets/chef.png',
            'sizes': '37x35',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': './src/assets/deleteicon.png',
            'sizes': '39x39',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': './src/assets/disminuir.png',
            'sizes': '24x24',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': './src/assets/editIcon',
            'sizes': '25x26',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': './src/assets/fullLogo.png',
            'sizes': '394x393',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': './src/assets/iconadmin',
            'sizes': '52x48',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': './src/assets/iconadmingreen.png',
            'sizes': '37x35',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': './src/assets/iconclock.png',
            'sizes': '40x40',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': './src/assets/iconcreate',
            'sizes': '37x35',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': './src/assets/icondelivered.png',
            'sizes': '32x32',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': './src/assets/delivering',
            'sizes': '32x32',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': './src/assets/iconkitchen.png',
            'sizes': '52x48',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': './src/assets/iconready',
            'sizes': '26x29',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': './src/assets/iconwaiter.png',
            'sizes': '53x53',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': './src/assets/outicon',
            'sizes': '40x40',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': './src/assets/removeorange.png',
            'sizes': '24x24',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': './src/assets/returnicon',
            'sizes': '48x48',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': './src/assets/searchicon.png',
            'sizes': '26x21',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': './src/assets/smallLogo',
            'sizes': '216x62',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
        ]
        // Add other custom properties here if needed.
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
