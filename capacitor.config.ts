import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ipm-web-site',
  webDir: 'www',
  bundledWebRuntime: true,
  server: {
    androidScheme: 'https'
  }
};

export default config;
