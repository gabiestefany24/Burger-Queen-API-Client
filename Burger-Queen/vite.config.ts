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
            'src': 'addNewProduct.png',
            'sizes': '45x45',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'Fondo.png',
            'sizes': '514x514', //uno de los requisitos es que uno de los iconos tenga una dimension de 144x144
            'type': 'image/png',
            'purpose': 'any maskable'
          }, 
          {
            'src': 'añadir.png',
            'sizes': '29x29',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'cancelorange.png',
            'sizes': '19x22',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'cancelwhite.png',
            'sizes': '24x24',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'checkgreen.png',
            'sizes': '24x24',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'checkwhite.png',
            'sizes': '24x24',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'chef.png',
            'sizes': '37x35',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'deleteIcon.png',
            'sizes': '39x39',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'disminuir.png',
            'sizes': '24x24',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'editIcon.png',
            'sizes': '25x26',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'fondo_login.png',
            'sizes': '144x144',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'fondoadmin.png',
            'sizes': '394x393',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'fondoAdmWhite.png',
            'sizes': '394x393',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'fullLogo.png',
            'sizes': '394x393',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'iconadmin.png',
            'sizes': '52x48',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'iconadmingreen.png',
            'sizes': '37x35',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'iconclock.png',
            'sizes': '40x40',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'iconcreate.png',
            'sizes': '37x35',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'icondelivered.png',
            'sizes': '32x32',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'icondelivering.png',
            'sizes': '32x32',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'iconkitchen.png',
            'sizes': '52x48',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'iconready.png',
            'sizes': '26x29',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'iconwaiter.png',
            'sizes': '53x53',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'logoBQ.png',
            'sizes': '394x393',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'outicon.png',
            'sizes': '48x48',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'removeorange.png',
            'sizes': '24x24',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'returnIcon.png',
            'sizes': '48x48',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'searchIcon.png',
            'sizes': '26x21',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'smallLogo.png',
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
