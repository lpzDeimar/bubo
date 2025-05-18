// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    integrations: [
        react()
    ],
    // Configurar para renderizado en servidor
    output: 'server',
    
    // Configuración para asegurar que las variables de entorno estén disponibles
    vite: {
      envPrefix: ['GOOGLE_'],
      define: {
        'import.meta.env.GOOGLE_SERVICE_ACCOUNT_EMAIL': 
          JSON.stringify(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL),
        'import.meta.env.GOOGLE_PRIVATE_KEY': 
          JSON.stringify(process.env.GOOGLE_PRIVATE_KEY)
      }
    }
});
