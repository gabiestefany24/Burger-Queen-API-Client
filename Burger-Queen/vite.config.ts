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
            'src': 'https://burger-queen-api-client-pi.vercel.app/assets/fullLogo-b86f60fc.png',
            'sizes': '144x144',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'https://burger-queen-api-client-pi.vercel.app/assets/addNewProduct.png',
            'sizes': '144x144',
            'type': 'image/png',
            'purpose': 'any maskable'
          }, 
          {
            'src': 'https://burger-queen-api-client-pi.vercel.app/assets/añadir.png',
            'sizes': '144x144',
            'type': 'image/png',
            'purpose': 'any maskable'
          }, 
          // {
          //   'src': 'https://burger-queen-api-client-h5p58iyfj-danipreciado.vercel.app/assets/cancelorange.png',
          //   'sizes': '144x144',
          //   'type': 'image/png',
          //   'purpose': 'any maskable'
          // }, 
          {
            'src': 'https://burger-queen-api-client-pi.vercel.app/assets/cancelwhite.png',
            'sizes': '144x144',
            'type': 'image/png',
            'purpose': 'any maskable'
          }, 
          {
            'src': 'https://burger-queen-api-client-pi.vercel.app/assets/checkgreen.png',
            'sizes': '144x144',
            'type': 'image/png',
            'purpose': 'any maskable'
          }
        ]
        // Add other custom properties here if needed.
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
});

/* ,
          {
            'src': 'assets/añadir.png',
            'sizes': '24x24',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'assets/cancelorange.png',
            'sizes': '24x24',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'assets/cancelwhite.png',
            'sizes': '24x24',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'assets/checkgreen.png',
            'sizes': '24x24',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'assets/checkwhite.png',
            'sizes': '24x24',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'assets/chef.png',
            'sizes': '37x35',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'assets/deleteicon.png',
            'sizes': '39x39',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'assets/disminuir.png',
            'sizes': '24x24',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'assets/editIcon.png',
            'sizes': '25x26',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'assets/fullLogo.png',
            'sizes': '394x393',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'assets/iconadmin.png',
            'sizes': '52x48',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'assets/iconadmingreen.png',
            'sizes': '37x35',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'assets/iconclock.png',
            'sizes': '40x40',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'assets/iconcreate.png',
            'sizes': '37x35',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'assets/icondelivered.png',
            'sizes': '32x32',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'assets/delivering.png',
            'sizes': '32x32',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'assets/iconkitchen.png',
            'sizes': '52x48',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'assets/iconready.png',
            'sizes': '26x29',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'assets/iconwaiter.png',
            'sizes': '53x53',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'assets/outicon.png',
            'sizes': '48x48',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'assets/removeorange.png',
            'sizes': '24x24',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'assets/returnicon.png',
            'sizes': '144x144',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'assets/searchicon.png',
            'sizes': '26x21',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'assets/smallLogo.png',
            'sizes': '216x62',
            'type': 'image/png',
            'purpose': 'any maskable'
          }, */